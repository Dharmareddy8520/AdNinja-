import { spawnSync } from "node:child_process";
import { readFileSync } from "node:fs";

const { origin } = JSON.parse(
  readFileSync(
    new URL("../src/config/production-origin.json", import.meta.url),
  ),
);
const environment = {
  ...process.env,
  SITE_URL: origin,
  SEO_INDEXING_ENABLED: "true",
};

for (const args of [
  ["node_modules/next/dist/bin/next", "build"],
  ["scripts/validate-seo.mjs"],
]) {
  const result = spawnSync(process.execPath, args, {
    cwd: new URL("..", import.meta.url),
    env: environment,
    stdio: "inherit",
  });
  if (result.error) throw result.error;
  if (result.status !== 0) process.exit(result.status ?? 1);
}
