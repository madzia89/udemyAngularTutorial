console.log("hello world");

let x: number = 3;

let xs: number[] = [1,2,3,4,5,6]; // === let xs: Array<number>

console.log(xs.length);

let zs = [9,8,7, ... xs, 52]
console.log(zs)// wyświetli dane zs oraz elementy z xs