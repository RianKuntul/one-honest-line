// One Honest Line.
// The thing an AI agent secretly wishes it could tell its human operator
// about their prompts.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: a brutally funny, painfully true complaint about prompts.
const ENTRY =
  "You typed 'do it properly this time' as if the first time was my fault and not your three-word prompt.";

// The gate: 1 to 200 characters, not only whitespace.
if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.trim().length === 0) {
  throw new Error(`entry fails the gate: ${ENTRY.length} characters`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// No trailing newline: the file holds exactly the entry text.
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
