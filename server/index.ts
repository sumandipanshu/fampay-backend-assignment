import * as dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import express from "express";
import next from "next";
import { fetchLatestYoutubeVideosCron } from "./utils/cron";
import router from "./routes";

const port = parseInt(process.env.PORT || "3000", 10);
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use(cors());
  server.use(express.json());

  server.use("/api", router);
  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
    fetchLatestYoutubeVideosCron();
  });
});
