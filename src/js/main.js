const main = document.getElementById("cartas-memoria");

let click01 = null 
let click02 = null


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

    carta.id = arrDuplicado[i].id; /* Atribundo um id a cada elemento do id */

    carta.addEventListener("click", (event) => {
      let idClicado =
        event.target.id; /* Buscando pelo id do elemento clicado  */

      let personagemClicado = personagens.find(
        /* find é um verificador de array  */
        (elemento) => elemento.id == idClicado
      ); /* Conparando se o id clicado é igual ao id do element */

      const cardClicado = event.target; /* acessando o target do evento */
            cardClicado.src = personagemClicado.img;  /* Atribuindo o src e passando o 
                                                      endereço de img do find clicado */
      
      if (click01 == null){
        click01 = cardClicado
      }else{
        click02 = cardClicado
      }

      comparaClick()
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


function comparaClick() {
  if (click01.id == click02.id){
    console.log('par')
  }else{
    console.log('nao par')
  }
}