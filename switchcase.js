let nome= prompt("Qual seu nome?: ")
let pesquisa= prompt("Escolha a fruta").toLoweCase();

switch (pesquisa){
  case "limão":
    console.log(`Olá ${nome}, o limão custa R$2,00`)
    break;
  case "morango":
    console.log(`Olá ${nome}, o morango custa R$5,00`)
    break;
  default:
    console.log(`A opção: ${pesquisa} não existe`)
}

const nota= prompt('Digite sua nota: ')
if (typeof nota==='number') {
  const resultado= (nota>=7) ? 'aprovado': 'reprovado'
  console.log(resultado)
} else{
  alert('Digite um valor valido')
}
