# AI Delivery Standard

**A model-neutral standard for capturing, verifying, archiving and reproducibly rebuilding AI-delivered systems.**

[Project site](https://quoralinex.github.io/AI-Delivery-Standard/) · [Releases](https://github.com/Quoralinex/AI-Delivery-Standard/releases) · [Machine schemas](schemas/) · [Closeout skill](skill/ai-delivery-closeout/SKILL.md)

AI Delivery Standard (ADS) converts work performed through AI chats, coding agents, desktop model applications and multimodel orchestrators into durable delivery packages that another capable AI or human can verify and rebuild without rereading the original conversation.

## What is normative
The JSON Schemas in `schemas/` and the versioned standard in `standard/` are normative. The `ai-delivery-closeout` skill is a reference execution procedure. Platform adapters are non-normative compatibility guides.

## Key principles
- model, provider, OS and storage neutral;
- current session is not assumed to be full project history;
- retrospective project reconciliation is first-class;
- machine execution specs use ordered stages and verification gates;
- secret values are excluded;
- local filesystem archive root is user-selected;
- checksum verification is required;
- completion is fail-closed.

## Quick start
```bash
npm install --registry=https://npm.pkg.github.com @quoralinex/ai-delivery-standard
```
Or clone the repository and run `npm ci && npm run check`.

Read `skill/ai-delivery-closeout/SKILL.md`, then start from `templates/ai-project-catalog.json`. The project site explains the full architecture, package model, current and retrospective workflows, portability model and rebuild path.

## Licence
Current releases are source-available under the **PolyForm Noncommercial License 1.0.0**. Personal and other noncommercial use is permitted under that licence. Commercial use requires a separate written licence from Quoralinex. See `LICENSE` and `NOTICE`.
