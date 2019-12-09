"use strict";
// npm install --save @types/readline-sync
exports.__esModule = true;
var teclado = require("readline-sync");
var titulo;
var descricao;
titulo = teclado.question("Digite um titulo: ");
descricao = teclado.question("Digite a descricao: ");
var pagina = "<HTML> <HEAD> <TITLE> .: Meu site :. </TITLE> </HEAD><BODY><H1> " + titulo + "</H1>";
console.log(pagina);
