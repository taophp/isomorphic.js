# Isomorphic.js
Bring the backend in the browser - WIP

**Isomorphic.js** _will be_  a modern isomorphic JavaScript framework designed to share business logic seamlessly between the server and a client-side proxy. It combines efficient offline handling, real-time synchronization, and intuitive routing for both Single Page Applications (SPA) and Multi Page Applications (MPA).

## Key Features

- **Client-side Proxy:** Intercepts and handles browser requests to reduce server calls.
- **Shared Business Logic:** Reuses the same JavaScript/TypeScript modules on both the server and the client.
- **Offline Support:** Caches requests and replays them when reconnected.
- **Real-Time Updates:** Uses Server-Sent Events (SSE) for live data synchronization.
- **URL History Management:** Ensures browser history reflects proxy-handled routes as if processed by the server.
- **Flexible Integrations:** Works with libraries like jQuery, htmx, Hyperscript, and others.

---

## How It Will Work

1. **The Client Proxy:**
   - Intercepts requests from the web app.
   - Responds locally if it has the necessary data.
   - Sends updates to the server when online or queues requests for replay during the next connection.

2. **The Server:**
   - Acts as the source of truth.
   - Handles all requests the proxy cannot resolve.
   - Pushes real-time updates to the proxy via SSE.

3. **Shared Business Logic:**
   - Encapsulates rules and processing in reusable modules.
   - Ensures consistency between the client and server.

---

## Requirements

- **Deno** as the runtime environment,
- Modern browser with JavaScript enabled,
- [Just](https://github.com/casey/just) command runner.
