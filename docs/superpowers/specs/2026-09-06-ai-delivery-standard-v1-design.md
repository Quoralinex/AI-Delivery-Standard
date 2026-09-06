# AI Delivery Standard v1 Design

## Purpose
AI Delivery Standard (ADS) is a vendor-, model-, operating-system- and storage-neutral standard for closing out AI-delivered project work into reproducible, machine-readable delivery packages.

## Architecture
The normative layer is JSON Schema plus deterministic validation. Human documentation and model-specific instruction adapters are secondary views. A project catalog points to project delivery indexes; each project index points to one or more immutable delivery-package manifests; each manifest points to a rebuild execution specification, architecture/deployment inventories, evidence, rollback, secrets requirements, SBOM and checksums.

## Core rules
- The active conversation is never assumed to be the entire project history.
- Source coverage must be declared COMPLETE, INCOMPLETE or BLOCKED_INCOMPLETE.
- Archive roots are user-selected local filesystem paths; sync products are out of scope.
- No secret value is stored in a package.
- Completion is fail-closed until acceptance, package generation, archive write and checksum verification pass.
- Rebuild instructions are parameterized and capability-based rather than vendor-specific.
- Directory packages are canonical; ZIP is optional and never authoritative.

## Operating modes
CURRENT_DELIVERY, RETROSPECTIVE_DELIVERY, RETROSPECTIVE_PROJECT, RECONCILE_PROJECT, VERIFY_PROJECT_ARCHIVE, INSTALL_ON_NEW_HOST, REBUILD_FROM_ZERO and DISASTER_RECOVERY.

## Skill
The public `ai-delivery-closeout` skill instructs an agent to discover project scope, reconcile prior packages, build/verify a package, update indexes and archive it. Platform adapters only point the host environment at the normative skill and schemas.

## Validation
Node.js validators use JSON Schema 2020-12 via Ajv. CI validates schemas, templates, skill contracts and example packages.
