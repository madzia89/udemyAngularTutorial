class Customer2{
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name
        this.age = age
    }

    welcome(){
        return `Hello ${this.name}, ${this.age}`
    }

    isAdult(){
        if(this.age >= 18){
            return true
        } else{
            return false
        }
    }
}
let customerek2 = new Customer2("Ola", 22);   


console.log(customerek2.welcome())  
//wywołanie  metody welcome (zadeklarowanej w klasie Customer2) na podstawie danych z cystomerek2

console.log(customerek2.isAdult())  
console.log(new Customer2('Halina', 15).isAdult())  

