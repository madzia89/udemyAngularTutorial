// interface Customer1 {
//     name: string;
//     age: number;
// }

// let customerek: Customer1 = {
//     name: "Jan",
//     age: 30
// }

class Customer1{
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name
        this.age = age
    }
}
let customerek = new Customer1("Ola", 22);   

//obiekt utworzony przez new, 
//przechouwje dane klasy, z której został utworzony

console.log(customerek);