# AI Delivery Standard v1.0.0

AI Delivery Standard defines a portable way to crystallize AI-delivered project work into verified human and machine-readable artifacts that can be reconstructed across models, desktop applications, operating systems and execution environments.

## Normative hierarchy
`ai-project-catalog.json` → `project-delivery-index.json` → `00-delivery-manifest.json` → machine inventories/specifications/evidence/checksums.

The JSON Schemas in `schemas/` are normative. Markdown explains the contracts but does not override them.

## Package contents
A conforming closeout package contains a delivery manifest; human manual; rebuild execution specification; architecture and deployment inventories; host compatibility; secret requirements without secret values; verification evidence; rollback/recovery; SBOM; checksums; and optional diagrams/config references/scripts.

## Project completeness
A session is not a project. Retrospective closeout must discover all accessible project sources and reconcile existing packages. Known inaccessible sources are recorded and prevent a COMPLETE source-coverage claim.

## Portability
Paths, executables and provider resources are parameterized. Host discovery selects compatible values at rebuild time. The standard does not require iCloud, MEGA, Dropbox, OneDrive, GitHub, Cloudflare, OpenAI, Anthropic or any other vendor.
