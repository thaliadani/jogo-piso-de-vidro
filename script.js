function jogar() {
    let numeroDeRodadas = 1;

    while (numeroDeRodadas <= 3) {
        console.log(`Rodada ${numeroDeRodadas}`);

        let escolhaJogador;
        do {
            escolhaJogador = parseInt(
                prompt("Rodada " + numeroDeRodadas + ", escolha um piso de 1 a 3:")
            );
            if (isNaN(escolhaJogador) || escolhaJogador < 1 || escolhaJogador > 3) {
                alert("Escolha inválida! Por favor, escolha um número entre 1 e 3.");
            }
        } while (isNaN(escolhaJogador) || escolhaJogador < 1 || escolhaJogador > 3);

        let pisoQuebrado = Math.floor(Math.random() * 3 + 1);

        if (escolhaJogador === pisoQuebrado) {
            alert("Vidro quebrou!");
            break;
        } else {
            alert("Vidro não quebrou! Próxima rodada!");
        }

        numeroDeRodadas++;
    }

    if (numeroDeRodadas > 3) {
        alert("Ganhou! Parabéns!");
    }
}
