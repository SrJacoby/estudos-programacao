const arrow1 = () => console.log("Hello World")

arrow1()

const arrow2 = (a, b) => a + b

console.log(arrow2(3, 5))

const array1 = [1, 2, 3]

const arrow3 = array1.map(n => n*2)

console.log(arrow3)

const arrow4 = (a, b, c) => a + b + c

console.log(arrow4(5, 2, 3))

array2 = ["Paulo", "Pedro", "Luiz"]

const arrow5 = array2.map(n => n.length)

console.log(arrow5)