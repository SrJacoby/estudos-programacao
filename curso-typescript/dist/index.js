"use strict";
//Tipo Básicos
let age = 5;
const firstName = "Luiz";
const isValid = true;
let idk = 5;
idk = "12";
idk = true;
const ids = [1, 2, 3, 4, 20];
const names = ["Luiz", "Steph"];
const booleans = [true, false, true];
//Tupla
const person = [0, "Luiz"];
//Lista de Tuplas
const people = [
    [0, "Luiz"],
    [1, "Steph"],
];
//Intersections
const productId = false;
//Enum
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction["Left"] = "Esquerda";
})(Direction || (Direction = {}));
const direction = Direction.Left;
console.log(direction);
//Type Assertions
const productName = "Boné";
let itemId = productName;
