import { Produto } from "./Produto";

let p1: Produto;
let p2: Produto;

p1 = new Produto(1, "teste", "detalhe", 10, 30, "link");
p2 = new Produto(2, "teste", "detalhe", 20, 20, "link");

console.log(p1.getInfo());
console.log(p2.getInfo());

console.log(" ");
console.log(p1); // formato json
console.log(p2); // formato json