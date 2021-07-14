import colors from "colors/safe";
const endText = (qtyWords: number) => {
    console.log(`terminamo, logueamos ${qtyWords} palabras`);
};

const traverseText = ({
    text,
    qtyWords = 0,
    timer = 1000,
    finished,
}: {
    text: string;
    qtyWords?: number;
    timer?: number;
    finished?: boolean;
}) => {
    return new Promise<number>((resolve, reject) => {
        const words: string[] = text.split(" ");
        let counter: number = 0;
        let sti = setInterval(() => {
            if (words[counter]) {
                console.log(colors.bgCyan(colors.white(colors.bold(colors.underline(words[counter])))));
                counter++;
            } else {
                clearInterval(sti);
                console.log("\n");
                resolve(qtyWords + words.length);
                if (finished) endText(qtyWords + words.length);
            }
        }, timer);
    });
};

traverseText({ text: "ARGENTINA CAMPEÓN DE LA COPA AMÉRICA 2021" })
    .then((response) =>
        traverseText({
            text: "VAMOS POR QATAR",
            qtyWords: response,
            timer: 500,
        })
    )
    .then((response) =>
        traverseText({
            text: "SCALONETA LA PUTA QUE LO PARIOOO",
            qtyWords: response,
            timer: 750,
            finished: true,
        })
    );
