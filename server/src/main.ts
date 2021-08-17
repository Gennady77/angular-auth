import cors = require("cors");
import * as express from "express";
import { Express } from "express";
import { createServer } from "http";

const port = 8080;
const app: Express = express();

const httpServer = createServer(app);

app.use(cors({
  credentials: true
}));

app.get('/getInfo', (req, resp) => {
  console.log('=================', req.headers.authorization);
  if (req.headers.authorization) {
    resp.send('there is some secure information');
    return;
  }

  resp.status(403).send('A token is required for authentication.');
});

httpServer.listen(port, () => {
  console.log(`Server listening port ${port}`);
})
