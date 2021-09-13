import express from "express";
import cors from "cors";
import { InitWsServer } from "./services/socket";
import { createServer } from "http";
import messagesDB from "./services/messagesDB";
import products from "./routes/products";
import cart from "./routes/cart";

const app = express();
const httpServer = createServer(app);
InitWsServer(httpServer);

const port = 8080;

httpServer.listen(port, () => console.log(`Server running in port:  ${port}`));
httpServer.on("error", (err) => console.error(`There was an error: ${err}`));

messagesDB.init();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api/carrito", cart);
app.use("/api/productos", products);
