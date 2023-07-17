/** Perte 01 */
// const ativar = document.querySelector('button');

// /** @param {MouseEvent} event */
// function ativarAoClick(event) {
//   console.log(event.x);
// }

// // O addEventListener tem como primeiro o tipo de evento e por segundo uma funcao.
// ativar.addEventListener('click', ativarAoClick);

/** Perte 02 */
// const larguraTela = window.innerHeight;

// // Visualiza as coordenadas do mause quando esta na tela.

// function coordenadaMause(event){
//   const coordenadas = {
//     x: event.x,
//     y: event.y,
//   };
//   console.log(coordenadas);
// }

// // window.addEventListener('mousemove', coordenadaMause);

// // Vai mostrar a distancia do scroll em relacao a tela, acada vez que voce scroll
// function scroll() {
//   console.log(window.scrollY);
// }
// window.addEventListener('scroll', scroll);

/** Perte 05 = loop*/

const lista = ["js", "20" , "true"];
const body = document.querySelector('body')

/** com o for normal 
for (let index = 0;
  index < lista.length;
  index ++) {
    
  console.log(lista[index]);
  body.innerHTML += "<li>" + lista[index] + "</li>";
}*/
/* *Com forEach ao qual e expecifico para arry
function adicionarBody(item) {
  body.innerHTML += "<li>" + item + "</li>";
}
lista.forEach(adicionarBody);*/

const navega = document.querySelectorAll("nav a");

function logHref(item) {
  const href = item.href;
  console.log(href);
}

navega.forEach(logHref);

console.log(navega[navega.length - 1]);


// é um método nativo do JavaScript, capaz de criar uma nova instância de um Array a partir de diferentes tipos de dados.

const transforma = Array.from(document.querySelectorAll("nav a"));

console.log(transforma);