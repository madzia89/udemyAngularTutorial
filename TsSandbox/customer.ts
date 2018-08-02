class Person{
    constructor(protected name: string, private age: number){}

    welcome(): string {
        return `Hello from ${this.name}, age ${this.age}`
    }
}

export class Customer extends Person {
    constructor(name: string, age: number, private advisor){
        super(name, age)
    }
    welcome(): string {
        return `Hello from customer ${this.name}, advised by ${this.advisor}`
    }
}