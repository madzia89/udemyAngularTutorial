class Person1{
    protected name: string; 
    //protected ochrania zmienną tj. ta zmienna może być używana w klasach, które dziedziczą,
    // ale raz nadane imię nie może być zmienione
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

class Customer4 extends Person1{
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

