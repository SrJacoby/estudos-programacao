// 1 - Array
const lista = [1, 2, 3, 4, 5]

console.log(lista)

console.log(typeof lista)

// 2- Mais sobre arrays
const arr = ["a", "b", "c", "d", "e"]

console.log(arr[0])

console.log(arr[2])

console.log(arr[10])


// 3- Propriedades

const numbers = [5,3,4]

console.log(numbers.length)

console.log(numbers["length"])

const myName = "Luiz"

console.log(myName.length)

// 4- Métodos

const otherNumbers = [1,2,3]

const allNumbers = numbers.concat(otherNumbers)

console.log(allNumbers)

const text = "algum texto"

console.log(text.toUpperCase())

console.log(typeof text.toUpperCase)

console.log(text.indexOf("g"))

// 5 - Objetos
const person = {
    name: "Luiz",
    age: 19,
    job: "Programador",
}

console.log(person)

console.log(person.name)

console.log(person.name.length)

console.log(typeof person)

// 6- Criando e deletando propriedades

const car = {
    engine: 2.0,
    brand: "VW",
    model: "Tiguan",
    km: 20000
}

console.log(car)

car.doors = 4

console.log(car)

delete car.km

console.log(car)

// 7- Mais sobre objetos

const obj = {
    a: "teste",
    b: true,
}

console.log(obj instanceof Object)

const obj2 = {
    c: []
}

Object.assign(obj2, obj)

console.log(obj2)

// 8- Conhecendo melhor os objetos
console.log(Object.keys(obj))
console.log(Object.keys(obj2))
console.log(Object.keys(car))

console.log(Object.entries(car))

// 9- Mutação
const a ={
    name: "Luiz"
}

const b = a

console.log(a)
console.log(b)

console.log(a === b)

a.age = 19

console.log(a)
console.log(b)

delete b.age
console.log(a)
console.log(b)

//  10 - loop em array

const users = ["Matheus", "João", "Pedro", "Miguel"]

for (let i = 0; i < users.length; i++){
    console.log(`Listando o usuário: ${users[i]}`)
}

// 11 - push e pop

const array = ["a", "b", "c"]

array.push("d")
console.log(array)
console.log(array.length)

array.pop()
console.log(array)

const itemRemovido = array.pop()

console.log(itemRemovido)

console.log(array)

array.push("z", "x", "y")

console.log(array)

// 12- Shift e unshift

const letters = ["a", "b", "c"]

const letter = letters.shift()

console.log(letter)

console.log(letters)

letters.unshift("p", "q", "r")

letters.unshift("z")

console.log(letters)

// 13 - indexOf e lastIndexOf

const myElements = ["Morango", "Maçã", "Abacate", "Mamão", "Abacate"]

console.log(myElements.indexOf("Maçã"))

console.log(myElements.indexOf("Abacate"))

console.log(myElements[2])

console.log(myElements [myElements.indexOf("Abacate")])

console.log(myElements.lastIndexOf("Abacate"))

console.log(myElements.lastIndexOf("Abacaxi"))

// 14 - Slice

const testeSlice = ["a", "b", "c", "d", "e", "f"]

const subArray = testeSlice.slice(2, 4)

console.log(subArray)

console.log(testeSlice)

const subArray2 = testeSlice.slice(2, 4+1)

console.log(subArray2)

const subArray3 = testeSlice.slice(10, 20)

console.log(subArray3)

const subArray4 = testeSlice.slice(2)

console.log(subArray4)

// 15 - foreach

const nums = [1, 2, 3, 4]

nums.forEach((numero) => {
    console.log(`O número é ${numero}`)
})

const posts = [
    {title: "Primeiro post", category: "PHP"},
    {title: "Segundo post", category: "JavaScript"},
    {title: "Terceiro post", category: "Python"}
]

posts.forEach((post)=>{
    console.log(`Exibindo post: ${post.title}, da categoria: ${post.category}`)
})

// 16 - Includes

const brands = ["BMW", "VW", "Fiat"]

console.log(brands.includes("Fiat"))

console.log(brands.includes("KIA"))

if(brands.includes("BMW")){
    console.log("Há carros da marca BMW")
}

// 17 - reverse
const reverseText = [1, 2, 3, 4, 5]

reverseText.reverse()

console.log(reverseText)

// 18 - Trim

const trimTest = " testando \n  "

console.log(trimTest)
console.log(trimTest.trim())

console.log(trimTest.length)

console.log(trimTest.trim().length)

// 19 - Padstart

const testePadStart = "1"

const newNumber = testePadStart.padStart(4, "0")

console.log(testePadStart)
console.log(newNumber)


const testePadEnd = newNumber.padEnd(10, "0")

console.log(testePadEnd)

// 20 - Split

const frase = "O rato roeu a roupa do rei de Roma"

const arrayDaFrase = frase.split(" ")

console.log(arrayDaFrase)

// 21 - Join

const fraseDeNovo = arrayDaFrase.join(" ")

console.log(fraseDeNovo)

const itensParaComprar = ["Mouse", "Teclado", "Monitor"]

const fraseDeCompra = `Precisamos comprar: ${itensParaComprar.join(", ")}.`

console.log(fraseDeCompra)

// 22 - Repeat

const palavra = "Testando "

console.log(palavra.repeat(5))

// 23 - Rest operator

const somaInfinita = (...args) => {
    let total = 0
    for(let i = 0; i < args.length; i++){
        total += args[i]
    }

    return total
}

console.log(somaInfinita(1, 2, 3))

console.log(somaInfinita(1, 20, 34, 3424, 121321, 15651))

// 24 - for of

const somaInfinita2 = (...args) => {
    let total = 0
    for(num of args){
        total += num
    }

    return total
}

console.log(somaInfinita(1,2 ,4))
console.log(somaInfinita(5, 6, 1, 23, 156516))

// 25 - destructuring em objetos 

const userDetails = {
    firstName: "Luiz",
    lastName: "Jacoby",
    job: "Programador"
}

const {firstName, lastName, job} = userDetails

console.log(firstName, lastName, job)

// renomear variaveis
const {firstName: primeiroNome } = userDetails

console.log(firstName)

// 26 - destructuring com arrays
const myList = ["Avião", "Submarino", "Carro", "Trator"]

const [veiculoA, veiculoB, veiculoC, d, e] = myList

console.log(veiculoA, veiculoB, veiculoC)

// 27 - JSON

const myJSON = '{"name": "Matheus", "age": 31, "skills": ["PHP", "JavaScript", "Python"]}'

console.log(myJSON)

console.log(typeof myJSON)

// 28 - JSON para objeto e objeto para JSON

const myObject = JSON.parse(myJSON)
console.log(myObject)

console.log(myObject.name)

console.log(typeof Object)

// json inválido

const badJson = '{"name": Matheus, "age": 31}'

myObject.isOpenToWork = true
console.log(myObject)

const myNewJson = JSON.stringify(myObject)

console.log(myNewJson)

console.log(typeof myNewJson)