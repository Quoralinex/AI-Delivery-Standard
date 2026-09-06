import Ajv2020 from "ajv/dist/2020.js";
import addFormats from "ajv-formats";
import { readFile } from "node:fs/promises";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
const here = dirname(fileURLToPath(import.meta.url));
const schemasDir = resolve(here, "../schemas");
const schemaNames = ["delivery-package","delivery-manifest","rebuild-execution-spec","project-delivery-index","project-catalog","source-coverage","architecture-inventory","deployment-inventory","host-compatibility","secret-requirements","verification-evidence","rollback-recovery","sbom"];
let ajvPromise;
async function validator(){
  if(!ajvPromise) ajvPromise=(async()=>{ const ajv=new Ajv2020({allErrors:true,strict:false}); addFormats(ajv); for(const n of schemaNames){ const s=JSON.parse(await readFile(resolve(schemasDir,`${n}.schema.json`),"utf8")); ajv.addSchema(s); } return ajv; })();
  return ajvPromise;
}
function containsSecretValue(value, path="$"){
  if(Array.isArray(value)) return value.flatMap((v,i)=>containsSecretValue(v,`${path}[${i}]`));
  if(value && typeof value==="object") return Object.entries(value).flatMap(([k,v])=> (k.toLowerCase()==="value" && /secret|token|key|password|credential/i.test(path)) ? [`${path}.${k}`] : containsSecretValue(v,`${path}.${k}`));
  return [];
}
async function validate(name,data){ const ajv=await validator(); const fn=ajv.getSchema(`https://quoralinex.github.io/AI-Delivery-Standard/schemas/${name}.schema.json`); const ok=fn(data); const errors=[...(fn.errors??[]).map(e=>`${e.instancePath||"/"} ${e.message}`),...containsSecretValue(data).map(p=>`secret value forbidden at ${p}`)]; return {ok:ok&&errors.length===0,errors}; }
export async function validateProjectIndex(data){ const r=await validate("project-delivery-index",data); if(data?.status==="CLOSED" && data?.source_coverage?.status!=="COMPLETE") r.errors.push("closed project requires COMPLETE source coverage"); if(data?.status==="CLOSED" && (data?.unpackaged_deliveries?.length??0)>0) r.errors.push("closed project cannot contain unpackaged deliveries"); return {ok:r.errors.length===0,errors:r.errors}; }
export async function validateDeliveryPackage(data){ return validate("delivery-package",data); }
export async function validateBySchema(name,data){ return validate(name,data); }
