function gerarNumerosAleatorios(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        function gerarOperacao() {
            const operadores = ["+", "-", "*", "/"];
            return operadores[Math.floor(Math.random() * operadores.length)];
        }

        let nivel = 1;
        let numero1 = 0, numero2 = 0, operacao = 0, respostaCorreta = 0, totalAcertos = 0, totalErros = 0;
        const nomeDoJogador = document.getElementById('nome-do-jogador').value;
        document.getElementById('nome-do-jogador-exibicao').textContent = 'Nome do jogador: ' + nomeDoJogador + '!';
        function novoNivel() {
            numero1 = gerarNumerosAleatorios(1, 30 * nivel);
            numero2 = gerarNumerosAleatorios(1, 30 * nivel);
            operacao = gerarOperacao();

            document.getElementById('n1').textContent = numero1;
            document.getElementById('operacao').textContent = operacao;
            document.getElementById('n2').textContent = numero2;

            respostaCorreta = eval(`${numero1} ${operacao} ${numero2}`);
        }

        novoNivel();

        document.querySelector('calcular').addEventListener('click', () => {
            let respostaUsuario = parseInt(document.getElementById('respostaUsuario').value);

            if (respostaUsuario === respostaCorreta) {
                document.getElementById('resultado').textContent = "Parabéns! Você acertou! Próximo nível!";
                totalAcertos++;
                document.getElementById('acertos').textContent = 'total de acertos = ' + totalAcertos + ' acertos';
                nivel++;
                novoNivel();
            } else {
                document.getElementById('resultado').textContent = "Resposta incorreta. próximo nível!";
                totalErros++;
                document.getElementById('erros').textContent = 'total de erros = ' + totalErros + ' erros';
                nivel++;
                novoNivel();
            }
        });