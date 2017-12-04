/*
    Código Tyepscript
*/

let message:string = 'Primeira frase';
console.log(message);

function sum(a: number, b: number): number {
    return a+b;
}
console.log(sum(1, 2));

function increment(a: number, b?:number): number {
    return a+(b||1);
}
console.log(increment(1));

function divide(a: number, b:number=1): number {
    return a/b;
}
console.log(divide(2,2));

const sum2 = (a: number, b:number):number => a+b;
console.log(sum2(2,2));

const sumArray = (numbers: number[]) :number => numbers.reduce((total, item) => total+item, 0)
console.log(sumArray([1,2,3,4,5]));
