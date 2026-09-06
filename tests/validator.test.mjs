import test from "node:test";
import assert from "node:assert/strict";
import { validateProjectIndex, validateDeliveryPackage } from "../validators/lib.mjs";

test("project index validator rejects incomplete source coverage when closure is claimed", async () => {
  const bad = { schema_version: "1.0.0", project: {id:"x", name:"X"}, status:"CLOSED", deliveries:[], source_coverage:{status:"INCOMPLETE", sources:[], known_missing_sources:["chat-a"]} };
  const result = await validateProjectIndex(bad);
  assert.equal(result.ok, false);
});

test("delivery package validator rejects a secret value field", async () => {
  const bad = { schema_version:"1.0.0", delivery_id:"DCP-001", title:"X", status:"CLOSED", secret_requirements:{API_KEY:{required:true, value:"secret"}}, artifacts:[], acceptance:{status:"PASS"} };
  const result = await validateDeliveryPackage(bad);
  assert.equal(result.ok, false);
});
