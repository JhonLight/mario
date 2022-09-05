const main = document.getElementById('main')

criaCartas();

function criaCartas() {

  for (let i = 0; i < personagens.length; i++) {
    let cartaA = document.createElement("img");
    cartaA.src = "./src/img/QuestionBlock.png";
    let cartaB = document.createElement("img");
    cartaB.src = "./src/img/QuestionBlock.png";


    main.appendChild(cartaA)
    main.appendChild(cartaB)
  }
}

