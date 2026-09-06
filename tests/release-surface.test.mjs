import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";
const root = process.cwd();
const read = p => readFileSync(join(root,p), "utf8");
test("public release surface is deployable and noncommercial", () => {
  const pkg = JSON.parse(read("package.json"));
  assert.equal(pkg.name, "@quoralinex/ai-delivery-standard");
  assert.equal(pkg.license, "PolyForm-Noncommercial-1.0.0");
  assert.equal(pkg.publishConfig.registry, "https://npm.pkg.github.com");
  assert.match(read("LICENSE"), /PolyForm Noncommercial License 1\.0\.0/);
  assert.match(read("NOTICE"), /^Required Notice:/m);
  for (const p of ["site/index.html","site/styles.css",".github/workflows/pages.yml",".github/workflows/publish-package.yml"]) assert.ok(existsSync(join(root,p)), p);
  const html = read("site/index.html");
  for (const text of ["How it works","Architecture","Retrospective closeout","Packages & installation","Machine-readable delivery"]) assert.match(html, new RegExp(text));
  assert.doesNotMatch(html, /quoralinex_wordmark_gradient_transparent/i);
  assert.match(read("README.md"), /GitHub Pages|Project site/i);
});
