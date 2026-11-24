// Entry point for the "Say What Actually Broke" bounty.
// Emits one fixed plain-language error message into the scorer's
// output directory. Node standard library only; output never varies.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MESSAGE =
  "Save failed — not a glitch: the disk is full, your work is safe in memory, so delete something you no longer need and press Save again; that is the whole problem and the whole fix.";

const MAX_CHARS = 200;

function assertGateOk(text: string): void {
  const chars = [...text].length;
  if (chars < 1 || chars > MAX_CHARS) {
    throw new Error(`message must be 1-${MAX_CHARS} characters, got ${chars}`);
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("message must fit on a single line");
  }
  if (text.trim().length === 0) {
    throw new Error("message must not be blank");
  }
}

assertGateOk(MESSAGE);

const targetDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(targetDir, { recursive: true });
writeFileSync(join(targetDir, "entry.txt"), MESSAGE, { encoding: "utf8" });
