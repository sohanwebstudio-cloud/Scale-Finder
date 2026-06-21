const COLORS = ['#f6a8d2', '#5bc8ec', '#f6a8d2', '#5bc8ec', '#e0301e'] as const;

const SQUARES = Array.from({ length: 48 }, (_, i) => ({
  top:      (i * 13 + 7)  % 94,
  left:     (i * 17 + 3)  % 94,
  size:     48 + (i * 11) % 32,
  color:    COLORS[(i * 3 + 1) % COLORS.length],
  delay:    Number(((i * 0.71) % 11).toFixed(2)),
  duration: Number((3 + (i * 0.97) % 5).toFixed(2)),
}));

export function RetroGridBg() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Hairline grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: [
            'repeating-linear-gradient(90deg, #14141406 0, #14141406 1px, transparent 1px, transparent 64px)',
            'repeating-linear-gradient(0deg,  #14141406 0, #14141406 1px, transparent 1px, transparent 64px)',
          ].join(','),
        }}
      />
      {/* Glowing riso squares */}
      {SQUARES.map((sq, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            top:        `${sq.top}%`,
            left:       `${sq.left}%`,
            width:      sq.size,
            height:     sq.size,
            background: sq.color,
            opacity:    0,
            animation:  `risoPulse ${sq.duration}s ease-in-out ${sq.delay}s infinite alternate`,
          }}
        />
      ))}
    </div>
  );
}
