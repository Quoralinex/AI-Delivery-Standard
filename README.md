# AI Delivery Standard

**A model-neutral standard for capturing, verifying, archiving and reproducibly rebuilding AI-delivered systems.**

AI Delivery Standard (ADS) converts work performed through AI chats, coding agents, desktop model applications and multimodel orchestrators into durable delivery packages that another capable AI or human can verify and rebuild without rereading the original conversation.

## What is normative
The JSON Schemas in `schemas/` and the versioned standard in `standard/` are normative. The `ai-delivery-closeout` skill is a reference execution procedure. Platform adapters are non-normative compatibility guides.

## Key principles
- model/provider/OS/storage neutral;
- current session is not assumed to be full project history;
- retrospective project reconciliation is first-class;
- machine execution specs use ordered stages and verification gates;
- secret values are excluded;
- local filesystem archive root is user-selected;
- checksum verification is required;
- completion is fail-closed.

## Quick start
```bash
npm install
npm run check
```
Read `skill/ai-delivery-closeout/SKILL.md`, then start from `templates/ai-project-catalog.json`.

## License
Apache-2.0.
