// Five Seconds to Explain the Glass — make.fun bounty u-po-pu-five-seconds-to-explain-the-glass-934d9949
// Writes one sentence — the house cat's defence after knocking a glass off the table — to /output/entry.txt.
// Gate: UTF-8 text, 1 to 200 characters, not only whitespace, exactly one line.
// Deterministic: no network, no randomness, no input — the same line every run.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I pushed it to test whether it was a glass or a bell — the floor ruled glass, so the experiment succeeded and the glass simply failed its part.";

// Self-check the competition gate: one line, 1–200 UTF-8 characters.
if ([...ENTRY].length < 1 || [...ENTRY].length > 200 || ENTRY.includes("\n")) {
  throw new Error("ENTRY violates the 1–200 character single-line gate");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(ENTRY);
