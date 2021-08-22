import express from "express";
import cors from "cors";
import { initWsServer } from "./services/socket";
import { createServer } from "http";
import path from "path";
import products from "./routes/products";

const app = express();
const httpServer = createServer(app);
initWsServer(httpServer);
const port = 8080;
const publicPath = path.resolve(__dirname, "../public");

const server = httpServer.listen(port, () =>
  console.log(`Server running in port:  ${port}`)
);
server.on("error", (err) => console.error(`There was an error: ${err}`));

app.use(express.static(publicPath));
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use("/api", products);
