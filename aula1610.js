let frutas= ['Maçã', 'uva', 'morango']
console.log(frutas[3-1]);
let consulta= frutas.indexOf('morango')
console.log(consulta)
frutas.pop();
frutas.push('melão')
console.log(frutas)
let inserir= prompt('Digite o nome da fruta: ')
frutas.push(inserir)
console.log(frutas)
