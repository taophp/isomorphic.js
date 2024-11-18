import { load } from "jsr:@std/dotenv";
import { route } from "jsr:@std/http/unstable-route";
import * as shared from "../shared/main.ts";

await load();
console.log(Deno.env.get("APP_PATH"));
Deno.serve(route(shared.getRoutes()), shared.defaultHandler);
