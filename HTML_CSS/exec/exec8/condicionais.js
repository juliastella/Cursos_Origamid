// function seguirMause(event) {
//   const x = event.x;
//   const y = event.y;
//   const circulo = document.querySelector('#circulo');
//   circulo.style.top = y + "px";
//   circulo.style.left = x + "px";
// }

// window.addEventListener('mousemove', seguirMause);

/** Otimizando */

const adiciona = document.querySelector('button');

function somar(a, b) {
  const div = document.querySelector('div');
  const total = Number(div.innerText) + 1;
  if(total < 10) {
    div.innerText = total
  }
  else{
    console.log("Nao e possivel adicionar mais.");
  }
}

if (adiciona){
  adiciona.addEventListener('click', somar);
}
