/** Switch 
var corFavorita = "Azul";

switch (corFavorita) {
  case "Azul":
    console.log("Olhe");
    break;
  case "Branco":
    console.log("Legal");
  default: // caso nenhuma seja verdadeira.
    console.log("Pare");
}
*/


/** Exec*/ 

// Verifique se a sua idade é maior do que a de algum parente:
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
var julia = 19;
var irmao = 14;

if (julia > irmao) {
  console.log('É maior');
}
else if (julia === irmao) {
  console.log('É igual');
}
else{
  console.log('É menor');  
}



// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);

console.log(expressao);

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre'; // verdadeiro
var idade = 28; // verdadeiro
var possuiDoutorado = false; //verdadeiro
var empregoFuturo; // Falso
var dinheiroNaConta = 0; //falso

console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta);
// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if (china > brasil) {
  console.log('Maior');
}
else{
  console.log(false);
}

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso'); // falso
}

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão'); // verdade
} else {
  console.log('Falso');
}