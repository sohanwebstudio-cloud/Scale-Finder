/**
 * Port of OutlierRemovingSmoother from github.com/thetwom/Tuner (MIT/GPL).
 *
 * Three cascading SmoothingBuffers. Each valid value goes to the FIRST buffer
 * that accepts it (within relDev of its mean); all subsequent buffers get their
 * outlier count incremented. Buffers are sorted by size when buffers[0] is too
 * small. Output = buffers[0].mean only when numSuccessiveOutliers == 0 and
 * the buffer has enough samples.
 */

class SmoothingBuffer {
  private values: Float64Array;
  private writeIdx = 0;
  private _size = 0;
  private _sum = 0;
  private numOutliers = 0;
  private readonly maxOutliers: number;
  readonly maxSize: number;
  readonly relDev: number; // fraction, e.g. 0.1 = 10%

  constructor(maxSize: number, relDev: number, maxOutliers: number) {
    this.maxSize = maxSize;
    this.relDev = relDev;
    this.maxOutliers = maxOutliers;
    this.values = new Float64Array(maxSize);
  }

  get size(): number { return this._size; }

  get mean(): number {
    return this._size === 0 ? 0 : this._sum / this._size;
  }

  accepts(value: number): boolean {
    if (this._size === 0) return true;
    const m = this.mean;
    return Math.abs(value - m) <= this.relDev * m;
  }

  add(value: number): void {
    if (this._size === this.maxSize) {
      // Evict oldest
      this._sum -= this.values[this.writeIdx];
    } else {
      this._size++;
    }
    this.values[this.writeIdx] = value;
    this._sum += value;
    this.writeIdx = (this.writeIdx + 1) % this.maxSize;
    this.numOutliers = 0;
  }

  incrementOutlierCount(): void {
    this.numOutliers++;
    if (this.numOutliers > this.maxOutliers) this.clear();
  }

  clear(): void {
    this._size = 0;
    this._sum = 0;
    this.writeIdx = 0;
    this.numOutliers = 0;
  }
}

export class OutlierRemovingSmoother {
  private readonly buffers: SmoothingBuffer[];
  private readonly minNumValid: number;
  private numSuccessiveOutliers = 0;

  /**
   * @param maxSize       max samples per buffer (10 in thetwom/Tuner)
   * @param relDev        relative deviation allowed (0.1 = 10%)
   * @param maxOutliers   successive outliers before buffer clears (1)
   * @param minNumValid   min samples in buffers[0] to emit output (2)
   * @param numBuffers    cascade depth (3)
   */
  constructor(
    maxSize = 10,
    relDev = 0.1,
    maxOutliers = 1,
    minNumValid = 2,
    numBuffers = 3,
  ) {
    this.minNumValid = minNumValid;
    this.buffers = Array.from({ length: numBuffers }, () =>
      new SmoothingBuffer(maxSize, relDev, maxOutliers)
    );
  }

  /**
   * Feed a new frequency value. Returns smoothed frequency or null (silence/outlier).
   */
  addValue(value: number): number | null {
    let placed = false;
    for (let i = 0; i < this.buffers.length; i++) {
      const buf = this.buffers[i];
      if (!placed && buf.accepts(value)) {
        buf.add(value);
        placed = true;
        this.numSuccessiveOutliers = 0;
      } else if (placed) {
        buf.incrementOutlierCount();
      }
    }

    if (!placed) {
      this.numSuccessiveOutliers++;
      for (const buf of this.buffers) buf.incrementOutlierCount();
    }

    // Sort by size (descending) when primary buffer is underfilled
    if (this.buffers[0].size < this.minNumValid) {
      this.buffers.sort((a, b) => b.size - a.size);
    }

    if (this.numSuccessiveOutliers > 0) return null;
    if (this.buffers[0].size < this.minNumValid) return null;
    return this.buffers[0].mean;
  }

  clear(): void {
    for (const buf of this.buffers) buf.clear();
    this.numSuccessiveOutliers = 0;
  }
}
