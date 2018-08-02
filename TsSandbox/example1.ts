console.log("hello world");

let x: number = 3;

let xs: number[] = [1,2,3,4,5,6]; // === let xs: Array<number>

// console.log(xs.length);

let zs = [9,8,7, ... xs, 52]
// console.log(zs)// wyświetli dane zs oraz elementy z xs

function welcome1(name: string, age?: number): string { 
    //znak zapytania przy age oznacza, że jest to argument który jest opcjonalny tj. może, ale nie musi się pojawić
    //po drugim dwukropku możemy wskazać co ma zwracać funkcja, tylko wtedy funkcja musi coś zwracać a nie być np. sam console.log
    return `Welcome ${name}`
}

function welcome2(name: string, age: number = 25): string { 
    // 'age:number = 25' oznacza, że jeżeli nie zostanie podany argument age, wówczas funkcja ma domyślnie przyjąć, że jest to 25
      return `Welcome ${name}`
  }
  
function welcome3(...names: string[]): string { 
// ... ten spread pozwala użytkownikowi na podanie wielu imion, które zapiszą się w tablicy i będą stringami
      return `Welcome ${names.join(', ')}`
  }

  console.log(welcome3('Magda', 'Iwonka', 'Wiola'))

function welcome(name: string): string{
    return `Welcome ${name}`
}

console.log(['Miłosz', 'Jan', 'Ola'].map(welcome))
//powyższy i poniższy zapis jest tym samym
console.log(['Miłosz', 'Jan', 'Ola'].map(name=> `Welcome ${name}`))

interface Customer {
    name: string ;
    address: Address; // to nam mówi, że adres musi być typu Address zadeklarowany poniżej
}

interface Address {
    street: string;
    city: string;
}

function anotherWelcomeFunction(customer: Customer): string {
    return `Welcome ${customer.name}, ${customer.address.street}`
}
// ta customer: Customer daje do zrozumienia typesCriptowi,
// że podany przez użytkownika argument musi byc typu customer,
// inaczej nie zadziała. 
//Gdybyśmy chcieli dodać tutaj np. customer.dateBirth wówczas wyskoczyłby błąd,
// ponieważ w interfejsie Customer nie ma DateOfBirth

console.log(anotherWelcomeFunction({
    name: "Miłosz",
    address: {
        street: 'Miłoszowska 5',
        city: 'Warszawa'
    }
}))