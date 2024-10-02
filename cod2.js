let decisao= prompt('Escolha 1 para abrir a porta e 2 para fechar a porta e 3 para deixa-la entre aberta')
if (decisao == 1) {
  console.log('A porta esta aberta')
} else if (decisao == 2 || decisao == 3) { //ou add outro else if
  console.log('A porta esta fechada')
} else {
  console.log('Resposta invalida')
}
