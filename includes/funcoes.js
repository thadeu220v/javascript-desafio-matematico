function gerarNumerosAleatorios(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function gerarOperacao() {
    const operadores = ["+", "-", "*", "/"];
    return operadores[Math.floor(Math.random() * operadores.length)];
}

function iniciarJogo() {
    numero1 = gerarNumerosAleatorios(1, 10);
    numero2 = gerarNumerosAleatorios(1, 10);
    operacao = gerarOperacao();

    document.getElementById('n1').textContent = numero1;
    document.getElementById('operacao').textContent = operacao;
    document.getElementById('n2').textContent = numero2;

    respostaCorreta = eval(`${numero1} ${operacao} ${numero2}`);
}

function novoNivel() {
    numero1 = gerarNumerosAleatorios(1, 100);
    numero2 = gerarNumerosAleatorios(1, 100);
    operacao = gerarOperacao();

    document.getElementById('n1').textContent = numero1;
    document.getElementById('operacao').textContent = operacao;
    document.getElementById('n2').textContent = numero2;

    respostaCorreta = eval(`${numero1} ${operacao} ${numero2}`);
}
