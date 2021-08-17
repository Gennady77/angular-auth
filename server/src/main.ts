import * as express from "express";
import { Express } from "express";
import { createServer } from "http";

const port = 8080;
const app: Express = express();

const httpServer = createServer(app);

httpServer.listen(port, () => {
  console.log(`Server listening port ${port}`);
})
