# AI Delivery Standard v1 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Deliver the public AI Delivery Standard v1 repository, machine contracts, validators, reference skill, adapters and examples.

**Architecture:** JSON Schema 2020-12 is normative. A project catalog discovers project indexes; indexes discover delivery manifests; manifests discover all rebuild/evidence artifacts. The skill is a thin procedure over those contracts.

**Tech Stack:** JSON Schema 2020-12, Node.js >=20, Ajv 8, node:test, Markdown, GitHub Actions.

**Spec:** `docs/superpowers/specs/2026-09-06-ai-delivery-standard-v1-design.md`

## Global Constraints
- Vendor/model/OS/storage neutral.
- No secret values in packages.
- Fail closed on incomplete source coverage or verification.
- Directory is authoritative package form; ZIP is optional.
- Current chat is never presumed complete project history.

### Task 1: Normative schemas and templates
- [ ] Write failing schema/template tests.
- [ ] Run tests and confirm failure.
- [ ] Implement all v1 schemas and templates.
- [ ] Run tests and confirm pass.

### Task 2: Validators and checksum tooling
- [ ] Write failing validator tests.
- [ ] Implement package/index/checksum validators.
- [ ] Run tests and confirm pass.

### Task 3: Public skill and adapters
- [ ] Write skill contract tests.
- [ ] Implement `ai-delivery-closeout` and generic/OpenAI/Claude/Codex/Qwen/Gemini adapters.
- [ ] Run tests and confirm pass.

### Task 4: Documentation, examples and CI
- [ ] Add normative standard docs, adoption/rebuild/retrospective guides, examples and CI.
- [ ] Run `npm run check`.
- [ ] Commit and open PR.
