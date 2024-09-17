const nome = "Heloyse";
const idade = "19";
const cidade = "Paulista";
console.log("Olá, meu nome é "+nome+" e tenho "+idade);
console.log(nome+" é da cidade de "+cidade);

const numero1 = 50;
const numero2 = 50;
const soma = numero1 + numero2;
const mult = numero1 * numero2;
const div = numero1 / numero2;
const sub = numero1 - numero2;
console.log(`O resultado da soma entre n1 e n2 é: ${numero1} + ${numero2} = ${soma}\n
O resultado da multiplicação entre n1 e n2 é: ${numero1} * ${numero2} = ${mult}\n
O resultado da divisão entre n1 e n2 é: ${numero1} / ${numero2} = ${div}\n
O resultado da subtração entre n1 e n2 é: ${numero1} - ${numero2} = ${sub}\n`
)

const base = 10;
const altura = 10;
const area = (base*altura)/2;
console.log("O resultado da area do triangulo é: "+area);

const nota1 = 6;
const nota2 = 10;
const nota3 = 10;
const media = (nota1+nota2+nota3)/3
console.log("O resultado da média é: "+media)

const original = 300
const desconto = 30 
valorFinal = original*(30/100)
console.log("O valor final com desconto é: "+valorFinal)

salario= 50000
console.log(`Seu salario bruto é: ${salario}`)
if(salario>=2400 && salario<=3100){
    desconto=165
    rrfp= salario*0.075
    salarioLiquido= salario-rrfp+desconto
    console.log(`Seu salario liquido é: ${salarioLiquido}`)
}
else if(salario>3100 && salario<=4200){
    desconto= 265
    rrfp= salario*0.15
    salarioLiquido= salario-rrfp+desconto
    console.log(`Seu salario liquido é: ${salarioLiquido}`)
}
else if(salario>4200){
    desconto= 500
    rrfp= salario*0.25
    salarioLiquido= salario-rrfp+desconto
    console.log(`Seu salario liquido é: ${salarioLiquido}`)
}
else{
    console.log(`Seu salario é muito baixo para descontar IR`)
}

taxaDolar= 5.40
valorI= 100
valorF= valorI/taxaDolar
console.log(`valor ${valorF.toFixed(2)}`)

c= 50
f= (c*9/5)+32
console.log(f)

peso= 46
altura= 1.63
imc= peso/(altura*altura)
console.log(`imc: ${imc.toFixed(1)}`)
