"use strict";
exports.__esModule = true;
var Produto_1 = require("./Produto");
var p1;
var p2;
p1 = new Produto_1.Produto(1, "teste", "detalhe", 10, 30, "link");
p2 = new Produto_1.Produto(2, "teste", "detalhe", 20, 20, "link");
console.log(p1.getInfo());
console.log(p2.getInfo());
console.log(" ");
console.log(p1);
console.log(p2);