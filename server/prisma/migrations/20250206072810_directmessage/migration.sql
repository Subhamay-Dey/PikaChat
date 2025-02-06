/*
  Warnings:

  - Added the required column `updated_at` to the `direct_messages` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "direct_messages" ADD COLUMN     "read" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- CreateIndex
CREATE INDEX "direct_messages_senderId_idx" ON "direct_messages"("senderId");

-- CreateIndex
CREATE INDEX "direct_messages_receiverId_idx" ON "direct_messages"("receiverId");
