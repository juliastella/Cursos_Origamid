// faz a troca de imagem em uma galeria.
const images = document.querySelectorAll('#galeria li img');

function galeriaTrocar(event) {
  const principal = document.querySelector('#imagem-principal');
  const clicada = event.currentTarget;
  principal.src = clicada.src;
  principal.alt = clicada.alt; 
}

function galeriaClick(imagem) {
  imagem.addEventListener('click', galeriaTrocar);
}

images.forEach(galeriaClick);