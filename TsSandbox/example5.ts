class Customer2{
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name
        this.age = age
    }

    welcome(){
        console.log(`Hello ${this.name}, ${this.age}`)
    }
}
let customerek2 = new Customer2("Ola", 22);   

console.log(customerek2);

customerek2.welcome()  //wywołanie  metody welcome (zadeklarowanej w klasie Customer2) na podstawie danych z cystomerek2