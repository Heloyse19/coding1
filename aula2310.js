const cores = ['Azul', 'Rosa', 'Verde', 'Roxo']; //lista
const frutas= ['maça', 'banana', 'uva', 'laranja']
const quantCores= cores.length;
const corredorA1= cores.slice(0, quantCores /2);
const corredorA2= cores.slice(quantCores/2);
const juntar= cores.concat(frutas)
console.log(juntar)
console.log(`As cores do corredor A1 são: ${corredorA1[0]}, ${corredorA1[1]}`);
console.log(`Os livros do corredor A2 são: ${corredorA2[0]}, ${corredorA2[1]}`);

const livros= ['Javascript', 'C++', 'Python', 'Java'];
const localLivros= [3, 4, 1];
const localELivros= [livros, localLivros];

console.log(`O livro ${localELivros[0][3]}, está na pratileira ${localELivros[1][0]}`)
