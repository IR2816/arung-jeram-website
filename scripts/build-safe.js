const { spawnSync } = require("node:child_process");
const { writeFileSync } = require("node:fs");
const { join } = require("node:path");

const runId = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
const distDir = `.next-build-prod-${runId}`;

const env = {
  ...process.env,
  NEXT_DIST_DIR: process.env.NEXT_DIST_DIR || distDir,
};

console.log(`[build-safe] NEXT_DIST_DIR=${env.NEXT_DIST_DIR}`);

const result = spawnSync("npx", ["next", "build", "--webpack"], {
  stdio: "inherit",
  shell: true,
  env,
});

if (result.status === 0) {
  writeFileSync(join(process.cwd(), ".next-dist-dir"), `${env.NEXT_DIST_DIR}\n`, "utf8");
}

if (typeof result.status === "number") {
  process.exit(result.status);
}

process.exit(1);
