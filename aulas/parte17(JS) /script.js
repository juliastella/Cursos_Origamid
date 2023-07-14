/** Perte 01 */
const ativar = document.querySelector('button');

/** @param {MouseEvent} event */
function ativarAoClick(event) {
  console.log(event.x);
}

// O addEventListener tem como primeiro o tipo de evento e por segundo uma funcao.
ativar.addEventListener('click', ativarAoClick);

/** Perte 02 */
const larguraTela = window.innerHeight;

// Visualiza as coordenadas do mause quando esta na tela.

function coordenadaMause(event){
  const coordenadas = {
    x: event.x,
    y: event.y,
  };
  console.log(coordenadas);
}

// window.addEventListener('mousemove', coordenadaMause);

// Vai mostrar a distancia do scroll em relacao a tela, acada vez que voce scroll
function scroll() {
  console.log(window.scrollY);
}
window.addEventListener('scroll', scroll);
