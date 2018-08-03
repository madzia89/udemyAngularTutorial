import * as fromCustomer from './customer'

const theJan = new fromCustomer.Person("Jan", 55)
theJan.age=4

console.log(theJan);

function test(x: number){
    if(x>5){
        let a= 5;
        return a
    }
}

console.log(test(8))