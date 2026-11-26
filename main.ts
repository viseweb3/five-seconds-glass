// Five Seconds to Explain the Glass — make.fun bounty u-po-pu-five-seconds-to-explain-the-glass-934d9949
// Writes one sentence — the house cat's defence after knocking a glass off the table — to /output/entry.txt.
// Gate: UTF-8 text, 1 to 200 characters, not only whitespace, exactly one line.
// Deterministic: no network, no randomness, no input — the same line every run.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I pushed it to check whether it was a glass or a bell, and the floor's verdict was glass, so the experiment succeeded and the glass simply failed its part.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(ENTRY);
