//Tipo Básicos

let age: number = 5;
const firstName: string = "Luiz";
const isValid: boolean = true;
let idk: any = 5;

idk = "12";
idk = true;

const ids: number[] = [1, 2, 3, 4, 20];
const names: string[] = ["Luiz", "Steph"];
const booleans: boolean[] = [true, false, true];

//Tupla
const person: [number, string] = [0, "Luiz"];

//Lista de Tuplas
const people: [number, string][] = [
    [0, "Luiz"],
    [1, "Steph"],
];

//Intersections
const productId: string | number | boolean = false;

//Enum
enum Direction{
    Up = 1,
    Down = 2,
    Left = "Esquerda",
};

const direction = Direction.Left;
console.log(direction);

//Type Assertions

const productName: any = "Boné";
let itemId = <string>productName;