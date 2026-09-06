import test from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";

const schemas = [
  "delivery-package", "delivery-manifest", "rebuild-execution-spec", "project-delivery-index", "project-catalog", "source-coverage", "architecture-inventory", "deployment-inventory", "host-compatibility", "secret-requirements", "verification-evidence", "rollback-recovery", "sbom"
];

test("all normative v1 schemas exist and use JSON Schema 2020-12", () => {
  for (const name of schemas) {
    const path = `schemas/${name}.schema.json`;
    assert.equal(existsSync(path), true, `missing ${path}`);
    const schema = JSON.parse(readFileSync(path, "utf8"));
    assert.equal(schema.$schema, "https://json-schema.org/draft/2020-12/schema");
    assert.match(schema.$id, /^https:\/\/quoralinex\.github\.io\/AI-Delivery-Standard\/schemas\//);
  }
});

test("templates expose the discovery hierarchy", () => {
  for (const path of ["templates/ai-project-catalog.json", "templates/ai-project-delivery-index.json", "templates/00-delivery-manifest.json", "templates/02-rebuild-execution-spec.json"]) assert.equal(existsSync(path), true, path);
  const index = JSON.parse(readFileSync("templates/ai-project-delivery-index.json", "utf8"));
  assert.ok(Array.isArray(index.deliveries));
  assert.equal(index.source_coverage.status, "INCOMPLETE");
});
