// One Letter: Coffee or Tea — entry program.
// Writes exactly one letter, "A" (coffee), to /output/entry.txt.
// The gate requires /output/entry.txt to be UTF-8 text of exactly 1 character:
// no trailing newline, no extra whitespace, nothing else.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LETTER = "A"; // coffee — the stronger stance (see README.md)

// Guard: the gate accepts exactly one letter A-Z, nothing else.
if (!/^[A-Z]$/.test(LETTER)) {
  throw new Error(`entry letter must be a single A-Z character, got ${JSON.stringify(LETTER)}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LETTER, "utf8");

// Read back and verify: the file must hold exactly the one letter.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== LETTER) {
  throw new Error(`entry.txt mismatch: expected ${JSON.stringify(LETTER)}, got ${JSON.stringify(written)}`);
}
