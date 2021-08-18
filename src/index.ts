import express from "express";
import handlebars from "express-handlebars";
import { Server, Socket } from "socket.io";
import { createServer } from "http";
import path from "path";
import products from "./routes/products";

const app = express();
const port = 8080;
const httpServer = createServer(app);
const io = new Server(httpServer);

httpServer.listen(port, () => console.log(`Server running in port:  ${port}`));
httpServer.on("error", (err) => console.error(`There was an error: ${err}`));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const publicPath = path.resolve(__dirname, "../public");
const viewsPath = path.resolve(__dirname, "./views");
const defaultLayoutPath = path.resolve(__dirname, "./views/layouts/index.hbs");
let arrayProducts: Array<Object> = [];

app.use(express.static(publicPath));
app.set("view engine", "hbs");
app.set("views", viewsPath);
app.engine(
  "hbs",
  handlebars({
    extname: "hbs",
    defaultLayout: defaultLayoutPath,
  })
);
app.use("/api", products);
io.once("connection", (socket: Socket) => {
  io.emit("products", arrayProducts);
});
io.on("connection", (socket: Socket) => {
  socket.on("new-product", (data) => {
    arrayProducts.push(data);
    io.emit("products", arrayProducts);
  });
});
