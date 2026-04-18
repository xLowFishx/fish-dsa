import { readdirSync, statSync } from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";

function collectTestFiles(targetPath) {
  const stats = statSync(targetPath);

  if (stats.isFile()) {
    return [targetPath];
  }

  const entries = readdirSync(targetPath, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const entryPath = path.join(targetPath, entry.name);

    if (entry.isDirectory()) {
      files.push(...collectTestFiles(entryPath));
      continue;
    }

    if (entry.name.endsWith(".test.js")) {
      files.push(entryPath);
    }
  }

  return files;
}

const args = process.argv.slice(2).filter((arg) => arg !== "--");
const rawTarget = args[0];

if (!rawTarget) {
  console.error("Usage: pnpm test:problem -- <problem-folder-or-test-file>");
  process.exit(1);
}

const resolvedTarget = path.resolve(process.cwd(), rawTarget);
let testFiles = [];

try {
  testFiles = collectTestFiles(resolvedTarget);
} catch (error) {
  console.error(`Could not read target: ${rawTarget}`);
  console.error(error.message);
  process.exit(1);
}

if (testFiles.length === 0) {
  console.error(`No test files found under: ${rawTarget}`);
  process.exit(1);
}

const result = spawnSync(
  process.execPath,
  ["node_modules/vitest/vitest.mjs", "run", ...testFiles],
  { stdio: "inherit" }
);

if (result.error) {
  console.error(result.error.message);
  process.exit(1);
}

process.exit(result.status ?? 1);
