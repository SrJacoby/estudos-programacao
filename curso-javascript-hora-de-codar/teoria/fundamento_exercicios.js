//Exercícios de fundamentos
//Exercício 1: Olá, Mundo!
//Crie um script que imprima "Olá, Mundo" no console

console.log('Olá, Mundo!')

//Exercício 2: Coversão de tipos
//Dado o valor de uma string "1234", converta-o em um número e exiba o tipo da variável no console

const minhaString = '1234'
console.log(typeof minhaString)

const meuNumero = Number(minhaString)
console.log(typeof meuNumero)

//Exercício 3: Manipulação de strings
//Dado uma string "JavaScript é incrível", escreva um código que conte quantos caracteres a string tem e quantas palavras existem na frase.

const tamanhoString = 'JavaScript é incrível'
console.log(tamanhoString.length)
console.log(tamanhoString.split(' ').length) //contador de número de palavras

//Exercício 4: Loops e Arrays
// Crie um array com cinco nomes. Use um loop for para imprimir cada nome no console

const nomes = ['Suárez', 'Cristaldo', 'Villasanti', 'Kannemann', 'Carballo']

for (let i = 0; i < nomes.length; i++){
    console.log(nomes[i])
}

//Exercícios 5: Funções, Strings e Math
//Crie uma função que aceita uma string representando um horário no formato de 24 horas (por exemplo, '14:30'). A função deve retornar uma string que converta o horário para o formato de 12 horas (por exemplo, '2:30 PM').
//Use o objeto Math para auxiliar nesta conversão. Certifique-se de que sua função lida corretamente com horários na meia-noite e no meio-dia.


function converterHorario(horario24){
    //const hora = horario24.split(':') [0]
    //const minuto = horario24.split(':') [1]

    const [hora, minuto] = horario24.split(':')

    //15 / 12 = 3, 23 % 12 = 11
    //Falsy 12%12=0=>12

    const hora12 = hora % 12 || 12

    let periodo = 'AM'

    if(hora>12){
        periodo = 'PM'
    }

    console.log(`${hora12}:${minuto} ${periodo}`)
}

converterHorario('15:15')