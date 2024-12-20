/* autor: thadeu henrique dos anjos
 Este é o arquivo javascript principal do jogo de fato,  é ele quem inicializa as variáveis principais e  dispara os comandos de incialização de jogo.
 É importante citar que, a partir de agora todos os detalhes da aplicação terão de ser organizados.
 As funções estão dentro da pasta includes/funcoes.js, e igualmente, está tudo comentado.
 aproveite e colabore você também com o código! */



let rodada = 1;
let numero1 = 0, numero2 = 0, operacao = 0, respostaCorreta = 0, totalAcertos = 0, totalErros = 0;

iniciarJogo();

document.getElementById('calcular').addEventListener('click', () => {
    let respostaUsuario = parseInt(document.getElementById('respostaUsuario').value);

    if (respostaUsuario === respostaCorreta) {
        document.getElementById('resultado').textContent = "Parabéns! Você acertou! Próximo nível!";
        totalAcertos++;
        document.getElementById('acertos').textContent = 'total de acertos = ' + totalAcertos + ' acertos';
    } else {
        document.getElementById('resultado').textContent = "Resposta incorreta. próximo nível!";
        totalErros++;
        document.getElementById('erros').textContent = 'total de erros = ' + totalErros + ' erros';
    }

    rodada++;
    document.getElementById('rodada').textContent = 'rodada atual de nº ' + rodada;

    if (rodada > 25) {
        novoNivel();
    } else {
        iniciarJogo();
    }
});