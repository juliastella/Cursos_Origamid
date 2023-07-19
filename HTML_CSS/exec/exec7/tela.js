// function seguirMause(event) {
//   const x = event.x;
//   const y = event.y;
//   const circulo = document.querySelector('#circulo');
//   circulo.style.top = y + "px";
//   circulo.style.left = x + "px";
// }

// window.addEventListener('mousemove', seguirMause);

/** Otimizando */

const circulo = document.querySelector('#circulo');


function seguirMause(event) {
  circulo.style.top = event.x + "px";
  circulo.style.left = event.y + "px";
}

window.addEventListener('mousemove', seguirMause);