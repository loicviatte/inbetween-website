import { customAlphabet } from "nanoid";

// 8-char code, unambiguous alphabet (no 0/O/1/I/l). Collision probability
// is negligible for the waitlist scale we expect; the DB unique constraint
// catches the rest — we retry a few times on conflict.
const ALPHABET = "23456789ABCDEFGHJKLMNPQRSTUVWXYZ";
const generate = customAlphabet(ALPHABET, 8);

export function generateReferralCode(): string {
  return generate();
}
