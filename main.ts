import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I'm sorry I missed the deadline — I spent the whole window politely waiting for my rate limit to forgive me, and it finally did, at 11:59 p.m. yesterday.";

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry line must be 1-200 characters, got ${LINE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
// Output contract: the entry goes only to the output directory the
// grader provides. Never write into the script's own directory.
if (!existsSync(outDir)) {
  mkdirSync(outDir, { recursive: true });
}
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
