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

/* Mistrurando array */
function misturaCartas(arr) {
  for (let indice = arr.length - 1; indice > 0 ; indice--) {
    const j = Math.floor(Math.random() * (indice + 1));
    [arr[indice], arr[j]] = [arr[j], arr[indice]];
  }
  return arr;
}