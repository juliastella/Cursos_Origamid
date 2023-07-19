//Criado por eu.
// function livro (nome, ano, autor){
//   let novoMaiusculo = nome.toUpperCase();
//   let calculoAno = (2050 - ano);
//   let frase = (nome + ' por ' + autor);

//   const objeto = {
//     nome: novoMaiusculo, 
//     calculoAno,
//     portugues: frase
//   };
//   return objeto
// }

// Otimizado 

function livro (nome, ano, autor){
  return {
    nome: nome.toUpperCase(), 
    calculoAno: (2050 - ano),
    portugues: (nome + ' por ' + autor)
  };
}


const guarda = livro('O Senhor dos Anéis', 1954, 'J. R. R. Tolkien');

console.log(guarda.portugues);