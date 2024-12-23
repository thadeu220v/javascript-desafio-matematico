/* autor: thadeu henrique dos anjos
 Este é o arquivo javascript principal do jogo de fato,  é ele quem inicializa as variáveis principais e  dispara os comandos de incialização de jogo.
 É importante citar que, a partir de agora todos os detalhes da aplicação terão de ser organizados.
 As funções estão dentro da pasta includes/funcoes.js, e igualmente, está tudo comentado.
 aproveite e colabore você também com o código! */




let vidas = 5;
let numero1 = 0, numero2 = 0, operacao = 0, respostaCorreta = 0, totalAcertos = 0, totalErros = 0;
const divDadosJogador = document.getElementById('dados-jogador');
const divJogoPrincipal = document.getElementById('jogo-principal');
const div_tela_game_over = document.getElementById('tela-game-over');

divJogoPrincipal.style.display = 'none';
div_tela_game_over.style.display = 'none';
iniciarJogo();
document.getElementById('iniciar').addEventListener('click', () => {
    divDadosJogador.style.display = 'none';
    divJogoPrincipal.style.display = 'block';
    let nome_jogador = document.getElementById('nomejogador').value;
document.getElementById('nomejogador-exibicao').textContent = 'Nome do jogador: ' + nome_jogador;
});

// ao clicar no botão de calcular executa as atividades abaixo
document.getElementById('calcular').addEventListener('click', () => {
    let respostaUsuario = parseInt(document.getElementById('respostaUsuario').value);

    if (respostaUsuario === respostaCorreta) {
document.getElementById('resultado').textContent = "Parabéns! Você acertou! Próximo nível!";
        totalAcertos++;
        document.getElementById('acertos').textContent = 'total de acertos = ' + totalAcertos + ' acertos';
iniciarJogo();
    } else {
        document.getElementById('resultado').textContent = "Resposta incorreta. próximo nível!";
        totalErros++;
        vidas--;
        document.getElementById('erros').textContent = 'total de erros = ' + totalErros + ' erros';
        document.getElementById('vidas').textContent = 'Ainda restam ' + vidas + ' vidas!';
        iniciarJogo();
    }

    

    if (totalAcertos >= 25) {
        novoNivel();
    }
    else if(totalErros == 5) {
        divJogoPrincipal.style.display = 'none';
        div_tela_game_over.style.display = 'block';
    }
});