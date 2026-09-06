import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";

test("public closeout skill contains mandatory fail-closed retrospective rules", () => {
  const path = "skill/ai-delivery-closeout/SKILL.md";
  assert.equal(existsSync(path), true);
  const text = readFileSync(path, "utf8");
  for (const token of ["RETROSPECTIVE_PROJECT", "current conversation", "source coverage", "FAIL_CLOSED", "project-delivery-index.json", "checksum"]) assert.match(text, new RegExp(token, "i"));
});

test("portable adapters exist", () => {
  for (const path of ["adapters/generic/README.md", "adapters/openai/README.md", "adapters/claude/CLAUDE.md", "adapters/codex/AGENTS.md", "adapters/qwen/PROJECT_INSTRUCTIONS.md", "adapters/gemini/README.md"]) assert.equal(existsSync(path), true, path);
});
