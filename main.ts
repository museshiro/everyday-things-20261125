import { mkdirSync, writeFileSync } from "node:fs";

// Entry: two lines about a queue. The grader reads /output/entry.txt,
// so this program writes ONLY there — no relative write, which would
// throw in the grader's read-only sandbox.
const line1 =
  "A queue is a train made of people where each carriage walks itself to the front.";
const line2 =
  "It works because a queue really does shuffle forward one person at a time, the way carriages pass a platform one by one, but it leaves out that carriages can't get bored, buy a snack, or simply walk away.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line1 + "\n" + line2 + "\n", "utf8");
