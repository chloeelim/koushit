import { defineConfig } from "@hey-api/openapi-ts";

export default defineConfig({
  client: { bundle: true, name: "@hey-api/client-axios" },
  input: "http://127.0.0.1:8000/openapi.json",
  output: "src/client",
  exportCore: false,
});
