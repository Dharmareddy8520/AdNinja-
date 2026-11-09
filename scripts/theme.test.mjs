import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import { runInNewContext } from "node:vm";

const home = readFileSync(
  new URL("../out/index.html", import.meta.url),
  "utf8",
);
const support = readFileSync(
  new URL("../out/support.html", import.meta.url),
  "utf8",
);
const themeScript = home.match(
  /<script[^>]*>(try\{const choice=[^<]+)<\/script>/,
)?.[1];

test("theme bootstrap is included in exported HTML", () => {
  assert.ok(themeScript, "theme script must render before page content");
  assert.ok(home.indexOf(themeScript) < home.indexOf("<body"));
});

for (const [stored, systemDark, expected] of [
  ["dark", false, "dark"],
  ["light", true, "light"],
  [null, true, "dark"],
  [null, false, "light"],
]) {
  test(`theme bootstrap uses ${stored ?? "system"} preference`, () => {
    const document = { documentElement: { dataset: {} } };
    runInNewContext(themeScript, {
      document,
      localStorage: { getItem: () => stored },
      matchMedia: () => ({ matches: systemDark }),
    });
    assert.equal(document.documentElement.dataset.theme, expected);
  });
}

test("theme bootstrap works when storage is unavailable", () => {
  const document = { documentElement: { dataset: {} } };
  runInNewContext(themeScript, {
    document,
    localStorage: {
      getItem: () => {
        throw new Error("Storage blocked");
      },
    },
    matchMedia: () => ({ matches: true }),
  });
  assert.equal(document.documentElement.dataset.theme, "dark");
});

test("exported support page links the developer profile", () => {
  assert.match(support, /id="developer"/);
  assert.match(
    support,
    /https:\/\/www\.linkedin\.com\/in\/dharmareddypandem\//,
  );
  assert.match(support, /Dharmareddy Pandem(?:<!-- -->)? on LinkedIn/);
});
