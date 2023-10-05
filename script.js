function mediaAluno() {
    
    // Lógica de Programação
    // Problema: obter três notas de um aluno, calcular a média,
    // exibir a média e exibir a situação do aluno: aprovado,
    // em exame ou reprovado.
    
    console.log('Início do programa');
    
    // Declaração das variáveis
    
    const nota1 = parseInt(document.getElementById('nota1').value);
    const nota2 = parseInt(document.getElementById('nota2').value);
    const nota3 = parseInt(document.getElementById('nota3').value); 
    
    // Calculo da Média
    const media = (nota1 + nota2 + nota3) / 3;
    
    console.log('A nota 1 é:' , nota1);
    
    console.log('A nota 2 é:' , nota2);
    
    console.log('A nota 3 é:' , nota3);

    document.getElementById('resultado').innerHTML = 'A media do aluno é:' + media + '<br>';


    
    if (media >= 7) {
        
        
    document.getElementById('situacao').innerHTML += 'situaçaõ: Aprovado' 
    console.log('APROVADO');

} else if (media >= 5) {

    document.getElementById('situacao').innerHTML += 'situaçaõ: Recuperação'
    console.log('RECUPERAÇÃO');

} else {

    document.getElementById('situacao').innerHTML += 'situaçaõ: Reprovado'
    console.log('REPROVADO');

}


console.log('Fim do programa');

}