//TIPOS DE DADOS

const inteiro = 15
var string = "Pedro"

console.log(`Nome: ${string}, Idade: ${inteiro}`)

//OPERADORES

//aritméticos

const nota1 = 8
const nota2 = 6

const media = (nota1 + nota2) / 2

console.log(`Nota média: ${media}`)

//comparação

const comparacao = 15 === 10
console.log(`15 é igual a 10? ${comparacao}`)

const comparacao2 = 15 !== 10
console.log(`15 é diferente que 10? ${comparacao2}`)

const comparacao3 = 15 > 10
console.log(`15 é maior que 10? ${comparacao3}`)

const comparacao4 = 15 < 10
console.log(`15 é menor que 10? ${comparacao4}`)

//lógicos

const logica1 = 20 > 12 && 12 < 8
console.log(`20 é maior que 12 E 12 é menor que 8? ${logica1}`)

const logica2 = 20 > 12 || 12 < 8
console.log(`20 é maior que 12 OU 12 é menor que 8? ${logica2}`)

const logica3 = !20 > 12 && !12 < 8
console.log(`20 é não maior que 12 E 12 é não menor que 8? ${logica3}`)

const logica4 = !20 > 12 || !12 < 8
console.log(`20 é não maior que 12 OU 12 é não menor que 8? ${logica4}`)

//ESTRUTURAS

//condicional

//simples

if(8>3){
    console.log("Verdadeiro")
}

//composta

if(5 === 6){
    console.log("Verdadeiro")
} else{
    console.log("Falso")
}

//aninhada

const age = 60

if(age > 0 && age <= 12){
    console.log("Você é criança")
} else if(age > 12 && age < 18){
    console.log("Você é um adolescente")
} else if(age >= 18 && age <= 20){
    console.log("Você é um jovem adulto")
} else if(age >= 21 && age < 60){
    console.log("Você é um adulto")
} else{
    console.log("Você é um idoso")
}

//switch

const cor = "Azul"

switch(cor){
    case "Laranja":
        console.log("Você escolheu laranja!")
        break
    case "Azul":
        console.log("Você escolheu azul!")
        break
    case "Vermelho":
        console.log("Você escolheu vermelho!")
        break
}

//repetição

//while

var condicao1 = 1

while (condicao1 <= 5) {
    console.log(`Do: ${condicao1}`)
    condicao1++
}

//do while

var condicao2 = 1

do{
    console.log(`Do While: ${condicao2}`)
    condicao2++
}while (condicao2 <= 10)
    
//for

for(condicao3 = 1; condicao3 <= 15; condicao3++){
    console.log(`For: ${condicao3}`)
}

//ESTRUTURAS DE DADOS

//array

const array1 = ["Jacoby", "Luiz", "Martin"]

console.log(`Nome escolhido na lista: ${array1[2]}`)

const array2 = [1, 2, 3, 4, 5]
console.log(`Soma dos números escolhidos: ${array2[1] + array2[2]}`)

//objetos

const user = {
    name: "Jacoby",
    age: 20,
    email: "luizjacoby@email.com"
}

console.log(`
Nome: ${user.name},
Idade: ${user.age}
E-mail: ${user.email}
`)

//FUNÇÕES

//tradicional

function soma1(n1, n2){
    n1 = 5
    n2 = 10
    resultado = n1 + n2

    console.log(`Resultado - Soma 1: ${resultado}`)
}

soma1()

//anônima

const soma2 = function funcao2(n1, n2){
    return n1 + n2
}

console.log(`Resultado - Soma 2: ${soma2(5, 6)}`)

//arrow function

const soma3 = (a,b) => a + b

console.log(`Resultado - Soma 3: ${soma3(2, 4)}`)