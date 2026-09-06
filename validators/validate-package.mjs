#!/usr/bin/env node
import { readFile } from "node:fs/promises";
import { validateBySchema } from "./lib.mjs";
const [schemaName,file] = process.argv.slice(2);
if(!schemaName||!file){ console.error("usage: node validators/validate-package.mjs <schema-name> <file.json>"); process.exit(2); }
const data=JSON.parse(await readFile(file,"utf8")); const result=await validateBySchema(schemaName,data); if(!result.ok){ for(const e of result.errors) console.error(e); process.exit(1); } console.log(`${file}: valid ${schemaName}`);
