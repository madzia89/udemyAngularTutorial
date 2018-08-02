class Person1{
    name: string;
    age: number;
    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    welcome(){
        return `Hello ${this.name}, ${this.age}`
    }

    isAdult() {
        if (this.age >=18){
            return true
        } else {
            return false
        }
    }
}

class Customer4 extends Person{
    advisor: string;

    constructor(name: string, age: number, advisor: string){
        super(name, age) 
        this.advisor = advisor
    }

    welcome(){
        return `Good morning ${this.name}`
    }
}

let klient = new Customer4('Wojtech', 35, 'Agata')

klient.name = "Wojtas"
console.log(klient.welcome())

