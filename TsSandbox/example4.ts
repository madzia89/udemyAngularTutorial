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
}

let customerek = new Customer1();
customerek.name = "Ola"
customerek.age = 32

//obiekt utworzony przez new, 
//przechouwje dane klasy, z której został utworzony

console.log(customerek);