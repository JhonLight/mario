const main = document.getElementById("main");

criaCartas();

function criaCartas() {
  const arrDuplicado = [
    ...personagens,
    ...personagens,
  ]; /* Duplicando array spread operator*/

  const cartasEmbaralhadas =
    misturaCartas(arrDuplicado); /* Array de personagens */

  for (let i = 0; i < cartasEmbaralhadas.length; i++) {
    let carta = document.createElement("img");
    carta.src = "./src/img/QuestionBlock.png";

    carta.id = arrDuplicado[i].id;

    carta.addEventListener("click", (event) => {
      console.log(event.target);
    });

    main.appendChild(carta);
  }
}

/* Misturando array */
function misturaCartas(arr) {
  for (let indice = arr.length - 1; indice > 0; indice--) {
    const j = Math.floor(Math.random() * (indice + 1));
    [arr[indice], arr[j]] = [arr[j], arr[indice]];
  }
  return arr;
}
