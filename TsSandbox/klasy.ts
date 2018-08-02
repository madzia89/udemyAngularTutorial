class Person22{
    name: string;
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

//poniżej przykład dziedziczenia
//oznacza że Customer3 ma wszystkie pola i metody klasy Person
//może też posiadać a nawet powinna posiadać dodatkowe informacje
class Customer3 extends Person22{
    advisor: string;

    constructor(name: string, age: number, advisor: string){
        //constructor w typ przypadku przyjmuje argumenty z klasy Person (name, age)
        //oraz argument z klasy Customer3 (advisor)
        super(name, age) 
        //zawsze super musi się znaleźć w pierwszej linijce kodu
        // aby wskazać które argumenty są dziedziczone

        this.advisor = advisor
    }

    welcome(){
        return `Good morning ${this.name}`
    }
}

console.log(new Customer3('Wojtech', 35, 'Agata').isAdult())
//metoda isAdult została określona w klasie po której Customer3 dziedziczy dlatego w Customer3 też jest dostepna
//obiekty stworzone w Customer3 należą też do nadrzędnej klasy czyli w tym przypadku do Person
//dletego też możemy zrobić tak:

let rysiek: Person22 = new Customer3('Ryszard', 56, 'Anna') 
//oznacza to że zmienna stworzona z klasy Customer jest typu Person
// i można tak zrobić pomimo że advisor nie zostało zadeklarowane tam
// tylko w Customer3
// co więcej, po dopisaniu metody welcome w Customer3 
// (pomimo, że metoda o takiej samej nazwie jest w Person)
//welcome wykona się tak jak dla klasy Customer - bo to w tej klasie stworzony został Rysiek
// (chociaz jest typu Person)

console.log(rysiek.welcome())
