---
name: ai-delivery-closeout
description: Use when a user asks to finish, close out, archive, package, reconcile, retrospectively reconstruct, or prepare reproducible handover for AI-delivered project work.
---

# AI Delivery Closeout

Use this skill when a user asks to finish, close out, archive, package, reconstruct, reconcile or retrospectively document an AI-delivered project.

## Non-negotiable rules
1. The **current conversation MUST NOT be assumed to contain the entire project history**. Discover all accessible project chats/sessions, project files, repositories, deployment evidence and existing delivery packages.
2. Read `ai-project-catalog.json`, then `project-delivery-index.json`, then existing delivery manifests before creating a new package.
3. Record source coverage as `COMPLETE`, `INCOMPLETE` or `BLOCKED_INCOMPLETE`. Never claim retrospective completeness when known sources are inaccessible.
4. Operate `FAIL_CLOSED`: do not emit 100% complete while implementation, verification, source coverage, package generation, archive write or checksum verification is incomplete.
5. Never store secret values. Store secret names, required storage classes and rotation instructions only.
6. The canonical archive is a user-selected **local filesystem directory**. Cloud sync is outside the standard. No ZIP is required or authoritative.

## Modes
- `CURRENT_DELIVERY`
- `RETROSPECTIVE_DELIVERY`
- `RETROSPECTIVE_PROJECT`
- `RECONCILE_PROJECT`
- `VERIFY_PROJECT_ARCHIVE`
- `INSTALL_ON_NEW_HOST`
- `REBUILD_FROM_ZERO`
- `DISASTER_RECOVERY`

## Closeout sequence
1. Resolve project identity and archive root.
2. Load or create the project catalog and project delivery index.
3. Discover accessible project sources and existing closeout packages.
4. Build a deliverable inventory: `ALREADY_PACKAGED`, `PARTIALLY_PACKAGED`, `NOT_PACKAGED`, `SUPERSEDED`, `UNKNOWN`.
5. For each unclosed delivery, capture architecture, deployment, host compatibility, secret requirements, verification evidence, rollback/recovery and SBOM.
6. Generate the human manual and `02-rebuild-execution-spec.json`.
7. Generate `00-delivery-manifest.json` and all required machine files.
8. Generate `10-checksums.sha256`, verify every checksum, and validate JSON against the normative schemas.
9. Write the package under `AI Delivery Closeout Packages/<delivery-id> - <title>/`.
10. Update `project-delivery-index.json` atomically, then update the global project catalog.
11. Re-read the written files and checksum them.
12. Only then report completion.

## Retrospective project rule
In `RETROSPECTIVE_PROJECT`, search predecessor/continuation sessions and project-scoped sources before declaring source coverage complete. If the host cannot access known prior sessions, set source coverage to `BLOCKED_INCOMPLETE`; do not guess or substitute model memory.

## Completion formula
`IMPLEMENTATION + DEPLOYMENT + ACCEPTANCE + SOURCE_COVERAGE + MACHINE_SPEC + HUMAN_MANUAL + PROJECT_INDEX + ARCHIVE_WRITE + CHECKSUM_VERIFICATION = CLOSED`.
