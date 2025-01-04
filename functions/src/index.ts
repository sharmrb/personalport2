export {}; // This makes it a module

const functions = require("firebase-functions");
const { default: next } = require("next");
import * as express from 'express';

const app = next({
  dev: false,
  conf: { distDir: ".next" }, // Path to Next.js build
});

const handle = app.getRequestHandler();

exports.nextApp = functions.https.onRequest((req: express.Request, res: express.Response) => {
  return app.prepare().then(() => handle(req, res));
});
