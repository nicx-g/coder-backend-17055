import express from "express";
import path from "path";
import fs from "fs/promises";
const app = express();
const port = 8000;

const getProducts = async () => {
    try {
        const data = await fs.readFile("./src/products.txt", "utf-8");
        if (data) return JSON.parse(data);
    } catch (error) {
        console.log(error);
    }
};

const getRandomNumber = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min) + min);

const getRandomProduct = (products: Array<object>) => {
    const randomNumber = getRandomNumber(0, products.length - 1);
    return products[randomNumber];
};

let itemVisit = 0;
let itemsVisit = 0;

app.get("/", (req, resp) => {
    const myWelcomePath = path.resolve(__dirname, "./views/hi.html");
    resp.sendFile(myWelcomePath);
});
app.get("/items", async (req, resp) => {
    try {
        itemsVisit++;
        const products = await getProducts();
        resp.json({
            items: products,
            qty: products.length,
        });
    } catch (error) {
        console.log(error);
    }
});

app.get("/item-random", async (req, resp) => {
    try {
        itemVisit++;
        const products = await getProducts();
        const randomProduct = getRandomProduct(products);
        resp.json({ item: randomProduct });
    } catch (error) {
        console.log(error);
    }
});

app.get("/visits", (req, resp) => {
    resp.json({
        visits: {
            item: itemVisit,
            items: itemsVisit,
        },
    });
});

const server = app.listen(port, () => {
    console.log(`Todo listo en el puerto ${port}`);
});
server.on("error", (err) => console.log(err));
