-- CreateTable
CREATE TABLE "SavedScale" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "root" TEXT NOT NULL,
    "scaleName" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SavedScale_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "SavedScale_userId_idx" ON "SavedScale"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "SavedScale_userId_root_scaleName_key" ON "SavedScale"("userId", "root", "scaleName");
