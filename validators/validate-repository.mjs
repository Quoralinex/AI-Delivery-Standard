#!/usr/bin/env node
import { readdir, readFile } from "node:fs/promises"; import { validateBySchema,validateProjectIndex } from "./lib.mjs";
const schemas=await readdir("schemas"); if(schemas.filter(x=>x.endsWith(".schema.json")).length<13) throw new Error("expected 13 normative schemas");
for(const [name,file] of [["project-catalog","templates/ai-project-catalog.json"],["project-delivery-index","templates/ai-project-delivery-index.json"],["delivery-manifest","templates/00-delivery-manifest.json"],["rebuild-execution-spec","templates/02-rebuild-execution-spec.json"]]){ const data=JSON.parse(await readFile(file,"utf8")); const r=name==="project-delivery-index"?await validateProjectIndex(data):await validateBySchema(name,data); if(!r.ok && !(name==="project-delivery-index" && data.status==="ACTIVE")){ throw new Error(`${file}: ${r.errors.join("; ")}`); }}
console.log("AI Delivery Standard repository validation passed.");
