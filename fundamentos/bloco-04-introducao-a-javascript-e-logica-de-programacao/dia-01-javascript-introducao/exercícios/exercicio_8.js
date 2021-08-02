// 8 - Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false 

const n1 = 30;
const n2 = 51;
const n3 = 81;

let ehPar = false;

if ((n1 % 2 === 0 || n2 % 2 === 0) || (n3 % 2 === 0 )) {
    ehPar = true;
};

console.log(ehPar);