const main = document.getElementById('main')

criaCartas();

function criaCartas() {
  for (let i = 0; i < 8; i++) {
    let carta = document.createElement("img");
    carta.src = "./src/img/QuestionBlock.png";

    main.appendChild(carta)
  }
}
