const { spawnSync } = require("node:child_process");
const { existsSync, readFileSync } = require("node:fs");
const { join } = require("node:path");

const distFile = join(process.cwd(), ".next-dist-dir");
const lastDistDir = existsSync(distFile) ? readFileSync(distFile, "utf8").trim() : "";
const distDir = process.env.NEXT_DIST_DIR || lastDistDir || ".next-build-prod";

const env = {
  ...process.env,
  NEXT_DIST_DIR: distDir,
};

console.log(`[start-safe] NEXT_DIST_DIR=${env.NEXT_DIST_DIR}`);

const result = spawnSync("npx", ["next", "start"], {
  stdio: "inherit",
  shell: true,
  env,
});

if (typeof result.status === "number") {
  process.exit(result.status);
}

process.exit(1);
