import express from "express";
import cors from "cors";
import { InitWsServer } from "./services/socket";
import { createServer } from "http";
import products from "./routes/products";
import cart from "./routes/cart";

const app = express();
const httpServer = createServer(app);
InitWsServer(httpServer);

const port = 8080;

httpServer.listen(port, () => console.log(`Server running in port:  ${port}`));
httpServer.on("error", (err) => console.error(`There was an error: ${err}`));

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api/carrito", cart);
app.use("/api/productos", products);
