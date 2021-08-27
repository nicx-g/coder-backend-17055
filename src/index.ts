import express from "express";
import cors from "cors";
import products from "./routes/products";
import cart from "./routes/cart";

const app = express();
const port = 8080;

app.listen(port, () => console.log(`Server running in port:  ${port}`));
app.on("error", (err) => console.error(`There was an error: ${err}`));

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api/carrito", cart);
app.use("/api/productos", products);
