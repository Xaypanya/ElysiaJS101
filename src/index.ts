import { Elysia } from "elysia";

const app = new Elysia()
    .get('/ping', () => 'pong')
    .post('/pong', () => 'ping')
    .listen(3330)

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
