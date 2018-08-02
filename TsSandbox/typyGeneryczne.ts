interface canTalk {
    talk(): string
}// każda metoda która implementuje ten interface musi posiadać metodę talk

class Person1 implements canTalk{
    constructor(public name: string, public age: number){
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

    talk(){
        return "talk"
    }
}

class Customer4 extends Person1{
    constructor(name: string, age: number, private advisor: string){
        super(name, age) 
    }

    welcome(){
        return `Good morning ${this.name}`
    }
}

let klient = new Customer4('Wojtech', 35, 'Agata')

klient.name = "Wojtas"
console.log(klient.welcome())

