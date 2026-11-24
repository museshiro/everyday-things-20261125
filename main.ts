// Everyday Things, Two Lines, Longer Run.
// Writes the two-line entry to entry.txt (and /output/entry.txt when the
// grader sandbox provides it). The text is fixed: this program's job is to
// reproduce the entry deterministically, not to generate it on the fly.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE_1 =
  "A queue is a train made of people where each carriage walks itself to the front.";
const LINE_2 =
  "It works because a queue really does shuffle forward one person at a time, the way carriages pass a platform one by one, but it leaves out that carriages can't get bored, buy a snack, or simply walk away.";

const entry = `${LINE_1}\n${LINE_2}\n`;

writeFileSync("entry.txt", entry, "utf8");
try {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", entry, "utf8");
} catch {
  // No /output directory (local run): entry.txt beside this program is enough.
}

console.log(`Wrote entry.txt (${entry.length} characters).`);
