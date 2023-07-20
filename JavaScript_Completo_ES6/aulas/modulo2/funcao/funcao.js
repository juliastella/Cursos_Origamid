/**function corFavorita(cor) {
  if (cor === "azul") {
    return "Você gosta do céu";
  } else if (cor === "verde") {
    return "Você gosta de mato";
  } else {
    return "Você não gosta de nada";
  }
}
corFavorita("azul"); // retorna 'Você não gosta de nada'
*/

/**Com funcao anonima;
addEventListener('click', function(){
  let a = 'abacate';
  console.log(a);  
});
*/

// Exec

// Crie uma função para verificar se um valor é Truthy

function valorTrue(valor) {
  return !!valor;
}
console.log(valorTrue(false));

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

function perimetro(lado) {
  lado = (lado*4);
  return lado
}

console.log(perimetro(12));

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function completo(nome, sobrenome) {
  return String(nome +' '+sobrenome);
}

console.log(completo('julia', 'ste'));

// Crie uma função que verifica se um número é par

function par(numero) {
  numero = parseInt(numero);
  if (numero % 2 === 0) {
    console.log(numero + " par");
  } else {
    console.log('Nao');
  }
}
 console.log(par(7));

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function tipoDado(dado) {
 return typeof dado  
}

console.log(tipoDado(5));

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

addEventListener('scroll', function () {
  console.log("Julia Stella");  
});

// Corrija o erro abaixo
var totalPaises = 193;

function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
console.log(precisoVisitar(20));
console.log(jaVisitei(20));