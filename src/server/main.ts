import { load } from "jsr:@std/dotenv";
import { route } from "jsr:@std/http/unstable-route";

await load();

let app;
const appPath = `../${Deno.env.get("APP_PATH") || "app.sample"}/main.ts`;
try {
  app = await import(appPath);
} catch (error) {
  console.error("Failed to load the application:", error);
  Deno.exit(1);
}

const port = Number(Deno.env.get("PORT")) || 8000;
const hostname = Deno.env.get("DOMAIN") || "localhost";

Deno.serve({ hostname, port }, route(app.getRoutes()), app.defaultHandler);
