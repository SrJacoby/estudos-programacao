//Type

type Order = {
    productId: string;
    price: number;
};

type User = {
    firstName: string;
    age: number;
    email: string;
    password?: string;
    orders: Order[];
    register(): string;
};

const user: User = {
    firstName: "Steph",
    age: 20,
    email: "steph@email.com",
    orders: [{ productId: "1", price: 50 }],
    register() {
        return "Oloco";
    },
};

const printLog = (message: string) => {};

printLog(user.password!)

//Unions

type Author = {
    books: string[];
};

const author: Author & User = {
    age: 20,
    books: ["1"],
    email: "author@gmail.com",
    firstName: "Fernando",
    orders: [],
    register() {
        return "Oloco";
    },
};

//Interfaces

interface UserInterface {
    readonly firstName: string;
    email: string;
    login(): string;
};

const emailUser: UserInterface = {
    email: "jacoby@email.com",
    firstName: "Jacoby",
    login() {
        return "a";
    },
};

//Intersections - Type

type Grade = number | string;
const grade: Grade = 1;
