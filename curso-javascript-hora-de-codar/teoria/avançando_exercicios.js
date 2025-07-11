//Exercício de Manipulação de Array

//Crie uma lista de compras que é inicialmente vazia.
//Adicione 5 itens à lista usando push()
//Agora, remova o primeiro item da lista usando shift()
//Imprima a lista final no console

const lista = []

lista.push('Suárez', 'Cristaldo', 'Kannemann', 'Carballo', 'Villasanti')
lista.shift()

console.log(lista)

//Exercício de Manipulação de Array - find()

//Você tem um array de números: [3, 7, 14, 21, 29, 36, 42]
//Use a função find() para encontrar o primeiro número que é divisível por 7 e maior que 10

const listaNumeros = [3, 7, 14, 21, 29, 36, 42]

const num = listaNumeros.find((num) => num%7===0 && num > 10)

console.log(num)

//Exercício de Manipulação de Array - filter()

//Dado o array de números: [5, 10, 15, 20, 25, 30, 35, 40]
//Use a função filter() para criar um novo array que contenha apenas os números que são maiores que 20.

const listaNumeros2 = [5, 10, 15, 20, 25, 30, 35, 40]

const num2 = listaNumeros2.filter((num) => num>20)

console.log(num2)

//Exercício de Manipulação de String - slipt(), trim()

//Dada a string: "  Bom dia, mundo!  ".
//Remova os espaços em branco no início e no final da string, em seguida, divida a string em palavras.

const minhaString = "  Bom dia, mundo!  "
const minhaStringPalavras = minhaString.trim().split(' ')

console.log(minhaStringPalavras)

//Exercício de Manipulação de String - startWith(), endsWith()
//Dada a string: "O rato roeu a roupa do rei de Roma"
// Verifique se a string começa com a palavra "O" e termina a palavra "Roma"

const frase = "O rato roeu a roupa do rei de Roma"

console.log(frase.startsWith('O'))
console.log(frase.endsWith('Roma'))
