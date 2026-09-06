#!/usr/bin/env node
import { readFile, stat } from "node:fs/promises"; import { createHash } from "node:crypto"; import { dirname,resolve } from "node:path";
const file=process.argv[2]??"10-checksums.sha256"; const base=dirname(resolve(file)); const lines=(await readFile(file,"utf8")).split(/\r?\n/).filter(Boolean); let bad=0;
for(const line of lines){ const m=line.match(/^([a-f0-9]{64})\s+\*?(.+)$/); if(!m){console.error(`invalid checksum line: ${line}`);bad++;continue;} const p=resolve(base,m[2]); try{await stat(p); const b=await readFile(p); const got=createHash("sha256").update(b).digest("hex"); if(got!==m[1]){console.error(`checksum mismatch: ${m[2]}`);bad++;}}catch{console.error(`missing checksum target: ${m[2]}`);bad++;}}
if(bad) process.exit(1); console.log(`verified ${lines.length} checksums`);
