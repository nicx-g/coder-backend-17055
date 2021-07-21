import fs from "fs/promises";

class FileTest {
    path: string;

    constructor(path: string) {
        this.path = path;
    }

    getRandomNumber(min: number, max: number, decimal: boolean) {
        if (decimal) {
            let num: number = Math.random() * (max - min);
            return Number((num + min).toFixed(2));
        } else {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }
    }

    async read() {
        try {
            const data = await fs.readFile(this.path, "utf-8");
            console.log(JSON.parse(data));
        } catch (error) {
            console.log([]);
        }
    }

    async save() {
        try {
            const data = await fs.readFile(this.path, "utf-8");
            if (data) {
                const dataParsed: Array<object> = JSON.parse(data);
                let randomNumber: number = this.getRandomNumber(1, 1000, false);
                let newData = {
                    id: dataParsed.length + 1,
                    price: this.getRandomNumber(1, 1000, true),
                    title: `Product ${randomNumber}`,
                    thumbnail: `Link ${randomNumber}`,
                };
                dataParsed.push(newData);
                await fs.writeFile(
                    this.path,
                    JSON.stringify(dataParsed, null, "\t")
                );
            }
        } catch (error) {
            let randomNumber: number = this.getRandomNumber(1, 1000, false);
            let newData = [
                {
                    id: 1,
                    price: this.getRandomNumber(1, 1000, true),
                    title: `Product ${randomNumber}`,
                    thumbnail: `Link ${randomNumber}`,
                },
            ];
            await fs.writeFile(this.path, JSON.stringify(newData, null, "\t"));
        }
    }

    async delete() {
        try {
            await fs.rm(this.path);
        } catch (error) {
            console.log(error);
        }
    }
}

const file = new FileTest("./producto.txt");
