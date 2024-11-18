import { type Route } from "jsr:@std/http/unstable-route";

export function getRoutes() {
  return [
    {
      pattern: new URLPattern({ pathname: "/" }),
      handler: () => new Response("Hello from Isomorphic.js!"),
    },
    {
      pattern: new URLPattern({ pathname: "/about" }),
      handler: () => new Response("About page"),
    },
    {
      pattern: new URLPattern({ pathname: "/users/:id" }),
      handler: (_req, _info, params) => new Response(`User ID: ${params?.pathname.groups.id}`),
    },
  ];
}

export function defaultHandler(_req: Request) {
  return new Response("Not found", { status: 404 });
}
