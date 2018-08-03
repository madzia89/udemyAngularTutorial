export class Person{
    constructor(protected name: string, public age: number){
        setTimeout(()=>{
            console.log(this.name);
        }, 500)
    }

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