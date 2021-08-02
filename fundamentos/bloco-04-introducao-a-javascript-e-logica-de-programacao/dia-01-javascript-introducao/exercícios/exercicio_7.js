// 7 - Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:

let notaAtingida = 70; 

if (notaAtingida < 0 || notaAtingida > 100) {
    console.log("Erro, nota incorreta!");
} else if (notaAtingida >= 90) {
    console.log('A');
} else if (notaAtingida >= 80) {
    console.log('B');
} else if (notaAtingida >= 70) {
    console.log('C');
} else if (notaAtingida >= 60) {
    console.log('D');
} else if (notaAtingida >= 50) {
    console.log('E');
} else {
    console.log('F');
}


