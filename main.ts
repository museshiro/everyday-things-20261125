import { mkdirSync, writeFileSync } from "node:fs";

const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

const LINES: string[] = [
  "A zipper is a tiny metal mouth that says brrrp as it bites its two rows of teeth shut.",
  "The slider really does lock the two rows tooth by tooth, but the mouth has no jaw and a coat zipper can split open from the bottom when you bend.",
];

function buildEntryText(lines: string[]): string {
  const text = lines.join("\n");
  if (lines.length !== 2) {
    throw new Error(`expected exactly 2 lines, got ${lines.length}`);
  }
  if (text.length < 1 || text.length > 400) {
    throw new Error(`entry must be 1-400 chars, got ${text.length}`);
  }
  for (const line of lines) {
    if (!/^[A-Z].*[.!?]$/.test(line)) {
      throw new Error(`each line must be one sentence: ${line}`);
    }
  }
  return text;
}

function writeEntry(): void {
  mkdirSync(OUT_DIR, { recursive: true });
  writeFileSync(OUT_FILE, buildEntryText(LINES), "utf8");
}

writeEntry();
