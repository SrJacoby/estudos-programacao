interface IPerson{
    id: number;
    sayMyName(): string;
};

class Person implements IPerson{
    readonly id: number;
    protected name: string;
    private age: number;

    constructor(id: number, name: string, age: number){
        this.id = id;
        this.name = name;
        this.age = age;
    }

    sayMyName(): string {
        return this.name;
    };
}

//Código mais resumido

class PersonRefact{
    constructor(
        readonly id: number,
        protected name: string,
        private age: number,
    ) {}
};

class Employee extends Person{
    constructor(id: number, name: string, age: number) {
        super(id, name, age);
    }

    whoAmI(){
        return this.name;
    };
}

//Teste de modificadores de classe
//const luiz = new Person(1, "Luiz, 20");
//luiz.name;