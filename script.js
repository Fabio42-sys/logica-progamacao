// Lógica de Programação
// Problema: obter três notas de um aluno, calcular a média,
// exibir a média e exibir a situação do aluno: aprovado,
// em exame ou reprovado.

console.log('Início do programa');

// Declaração das variáveis

const nota1 = parseInt(prompt() );
const nota2 = parseInt(prompt() );
const nota3 = parseInt(prompt() ); 

// Calculo da Média
const media = (nota1 + nota2 + nota3) / 3;

console.log('A nota 1 é:' , nota1);

console.log('A nota 2 é:' , nota2);

console.log('A nota 3 é:' , nota3);

console.log('A média do aluno é:' , media);

console.log('Fim do programa');

