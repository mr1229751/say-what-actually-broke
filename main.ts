// Say What Actually Broke — make.fun entry.
// Writes the entry line (exactly one line of text) to /output/entry.txt.
// Node standard library only; deterministic: same bytes on every run.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Save failed — not a glitch: the disk is full, your work is safe in memory, so delete something you no longer need and press Save again; that is the whole problem and the whole fix.";

// Gate guard: the sealed scorer only accepts UTF-8 text of 1-200
// characters, not only whitespace. The line must also stay a single
// line, so reject line breaks rather than trusting the length check.
if (
  LINE.length < 1 ||
  LINE.length > 200 ||
  LINE.includes("\n") ||
  LINE.includes("\r") ||
  !LINE.trim()
) {
  throw new Error("entry line violates the gate constraints");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
