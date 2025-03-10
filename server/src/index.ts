import express, { Application, Request, Response } from "express";
import "dotenv/config";
import cors from "cors";
import Routes from "./routes/index.js"

const app: Application = express();
const PORT = process.env.PORT || 7000;

import {Server} from "socket.io"
import {createServer} from "http"
import { setupSocket } from "./socket.js";
import { createAdapter } from "@socket.io/redis-streams-adapter";
import redis from "./config/redis.config.js";
import { instrument } from "@socket.io/admin-ui";

const server = createServer(app)
const io = new Server(server, {
  cors: {
    origin: [process.env.FRONTEND_URL, "https://admin.socket.io"],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true,
  },
  adapter: createAdapter(redis)
})


instrument(io, {
  auth: false,
  mode: "development",
})

setupSocket(io) 
export {io}

// CORS configuration for all requests (before routes)
app.use((req: Request, res: Response, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // Allow all origins (for production, specify your domain)
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req: Request, res: Response) => {
  return res.send("It's working 🙌");
});

app.use("/api", Routes)

server.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));