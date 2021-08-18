import cors = require("cors");
import * as express from "express";
import { Express } from "express";
import { createServer } from "http";
import {sign, verify} from "jsonwebtoken";

const config = {
  TOKEN_KEY: 'secretkey'
}

const port = 8080;
const app: Express = express();

const httpServer = createServer(app);

app.use(cors({
  credentials: true
}));

app.get('/getInfo', (req, resp) => {
  const token = req.headers.authorization;

  if(!token) {
    resp.status(403).send('A token is required for authentication.');
    return;
  }

  try {
    const decode = verify(token, config.TOKEN_KEY);

    console.log('******* login decode', decode);

    resp.status(200).send('some secure information');
  } catch(err) {
    resp.status(401).send('Invalid token');
  }
});

app.post('/login', (req, resp) => {
  const user = {
    id: Date.now(),
    userEmail: 'exapmple@email.com',
    password: 123
  };
  const userInfo = {
    name: 'John',
    token: ''
  };

  userInfo.token = sign(user, config.TOKEN_KEY);

  resp.status(200).json(userInfo);
});

httpServer.listen(port, () => {
  console.log(`Server listening port ${port}`);
})
