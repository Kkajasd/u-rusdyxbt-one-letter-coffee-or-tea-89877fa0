// One Letter: Coffee or Tea — entry program.
// Writes exactly one letter, "A" (coffee), to /output/entry.txt.
// The gate requires /output/entry.txt to be UTF-8 text of exactly 1 character:
// no trailing newline, no extra whitespace, nothing else.
import { mkdirSync, writeFileSync } from "node:fs";

const LETTER = "A"; // coffee — the stronger stance (see README.md)

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LETTER, "utf8");
