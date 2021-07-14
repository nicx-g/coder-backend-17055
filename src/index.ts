const {Sum, Sub} = require('./classes.js')

const operation = (num1: number, num2: number, op: string) => {
    return new Promise((resolve, reject) => {
        if(op === "sum"){
            const sum = new Sum(num1, num2)
            resolve(sum.result())
        } else {
            const sub = new Sub(num1, num2)
            resolve(sub.result())
        }
    })
}

const operations = () => {
    operation(3, 5, 'sum').then(result => console.log(result))
    operation(3, 5, 'sub').then(result => console.log(result))
    operation(2, 0, 'sub').then(result => console.log(result))
    operation(10, 1, 'sum').then(result => console.log(result))
}

operations()