import http from "http";

const getRandomNumber = (min: number, max: number, decimal: boolean) => {
    if (decimal) {
        let num: number = Math.random() * (max - min);
        return Number((num + min).toFixed(2));
    } else {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
};

const getObjInString = () => {
    let randomNumber: number = getRandomNumber(1, 10, false);
    const obj = {
        id: randomNumber,
        title: `Producto ${randomNumber}`,
        price: getRandomNumber(1, 10000, true),
        thumbnail: `Foto ${randomNumber}`
    };
    return JSON.stringify(obj);
};

const server = http.createServer((request, response) => {
    const message = getObjInString();
    response.end(message);
});

server.listen(3000, () => {
    console.log("todo ready en el puerto 3000");
});
