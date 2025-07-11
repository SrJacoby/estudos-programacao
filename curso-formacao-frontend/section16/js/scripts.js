// 1 - Variáveis

let nome = "Matheus"

console.log(nome)

nome = "Luiz Jacoby"

console.log(nome)

const idade = 19

console.log(idade)

// Constantes não podem ter seus valores alterados

console.log(typeof nome)
console.log(typeof idade)

// 2- Mais sobre variáveis

// let 2teste = "inválido"
// let @teste = "inválido"

let a =10, b= 20, c= 30

console.log(a, b, c)

const nomeCompleto = "Luiz Jacoby"

const nomecompleto = "Luis Suárez"

console.log(nomecompleto)
console.log(nomeCompleto)

let _teste = "ok"
let $teste = "ok"

console.log(_teste)
console.log($teste)

// 3- Prompt

// const age = prompt("Digite a sua idade")

// console.log(`Você tem ${age} anos`)

// 4- Alert

// alert("Testando")
// const z = 10

// alert(`O número é ${z}`)

// // 5- Math
// console.log(Math.max(5, 2, 1, 10))

// console.log(Math.floor(5.14))

// console.log(Math.ceil(5.14))

// // 6- Console
// console.log("Teste!")

// console.error("erro!")

// console.warn("Aviso!")

// 7- If
// const m = 10

// if (m > 5){
//     console.log("M é maior que 5!")
// }

// const user = "João"

// if (user==="João"){
//     console.log("Seu nome é João")
// }

// if (user === "Maria"){
//     console.log("Olá, Maria!")
// }

// console.log (user === "João", user === "Maria")

// // 8- Else

// const loggedIn = false

// if(loggedIn){
//     console.log("Está autenticado!")
// }else{
//     console.log("Não está autenticado!")
// }

// const q = 10
// const w = 15

// if(q > 5 && w > 20){
//     console.log("Números mais altos")
// } else {
//     console.log("Os números não são mais baixos")
// }

// // 9- Else if
// if(1>2){
//     console.log("Teste")
// } else if(2>3){
//     console.log("Teste 2")
// }else if(5>1){
//     console.log("Agora sim!")
// }

// const userName = "Luiz"
// const userAge = 19

// if(userName === "José") {
//     console.log("Bem-vindo José")
// } else if (userName === "Luiz" && userAge === 19){
//     console.log("Olá Luiz, você tem 19 anos!")
// } else {
//     console.log("Nenhuma condição aceita!")
// }

// 10 - While

// let p = 0

// while(p < 5){
//     console.log(`Repetindo ${p}`)
//     p++
// }

// // //loop infinito
// // let x = 10

// // while(x>5){
// //     console.log(`Imprimindo ${x}`)
// // }

// // 11 - Do while
// let o = 10

// do{
//     console.log(`Valor de o: ${o}`)
//     o--
// } while(o>1)

// 12 - for
for(let t =0; t<10; t++){
    console.log(`Valor de t: ${t}`)
}

let r=10

for(r; r>0; r--){
    console.log(`Valor de r:${r}`)
}

// 13 - identação
for(let u=0; u<10; u++){
    if(u*2>10){
        console.log(`Maior que 10! ${u}`)
    } else{
        if(u /2 === 0){
            console.log("Deu 0")
        }
    }
}

// 14 - Break
for(let g = 20; g>10; g--){
    console.log(`O valor de g é: ${g}`)

    if(g === 15){
        console.log("o g é 15!")
        break
    }
}

// 15 - Continue
for(let s = 0; s<10; s++){
    // Operador de resto = %
    if(s % 2 === 0){
        console.log(`O número é par!`)
        continue
    }
    console.log(s);
}

// 16 - Switch
const job = "Programador"
switch (job){
    case "Programador":
        console.log(`Você é um programador!`)
        break

    case "Advogado":
        console.log(`Você é um advogado!`)
        break

    case "Engenheiro":
        console.log(`Você é um engenheiro!`)
        break

    default:
        console.log(`Profissão não encontrada`)
            
}

// Switch "errado"

const l = 100

switch(l){
    case 200:
        console.log(`O valor é 20`)

    case 100:
        console.log(`O valor é 100`)
        
    
    case 50:
        console.log(`O valor é 50`)

    default:
        console.log(`Valor não encontrado`)
}

const n = prompt("Digite um número:")

if(n%2===0){
    console.log(`${n} é um número par`)
} else if(n%2 ===1){
    console.log(`${n} é um número ímpar`)
} else{
    console.log(`Valor inválido`)
}