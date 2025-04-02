function jogar() {
  let rodada = 1;
  while (rodada <= 3) {
    console.log(`Rodada ${rodada}`);

    let escolhaJogador = prompt(
      "Rodada " + rodada + ", escolha um piso de 1 a 3:"
    );
    let pisoQuebrado = Math.floor(Math.random() * 3 + 1);

    if (escolhaJogador == pisoQuebrado) {
        alert("Vidro quebrou!");
        break;
    }else {
        alert("Vidro não quebrou! Proxima rodada!");
    }
    
    rodada++;
  }

  if (rodada > 3) {
    alert("Ganhou! Parabéns!");
  }
}
