// 6 - Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

const peçaXadrez = 'rei';

switch (peçaXadrez.toLowerCase()) {
    case 'rei':
        console.log ('Rei-> Uma casa apenas para qualquer direção.');
        break;
    case 'bispo':
        console.log ('Bispo -> Diagonal')
        break;
    case 'rainha': 
        console.log ('Rainha-> Diagonal, Horizontal e Vertical.'); 
        break;
    case 'cavalo': 
        console.log ('Cavalo -> "L" pode pular sobre as peças.'); 
        break;
    case 'torre': 
        console.log ('Torre -> Horizontal e Vertical');
        break;
    case 'peão':
        console.log ('Peão -> Apenas uma casa para frente, no primeiro movimento podem ser duas casas.');
        break;
    default:
        console.log ('Erro, peça inválida!');
        break;
};
    