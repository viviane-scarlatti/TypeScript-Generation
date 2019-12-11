"use strict";
/*
  codigo   : number
  nome     : string
  detalhes : string
  preco    : number
  estoque  : number
  linkFoto : string

*/
exports.__esModule = true;
var Produto = /** @class */ (function () {
    function Produto(_co, _no, _de, _pr, _es, _li) {
        this.codigo = _co;
        this.nome = _no;
        this.detalhes = _de;
        this.preco = _pr;
        this.estoque = _es;
        this.linkFoto = _li;
    }
    Produto.prototype.getCodigo = function () {
        return this.codigo;
    };
    Produto.prototype.setCodigo = function (_co) {
        this.codigo = _co;
    };
    Produto.prototype.getNome = function () {
        return this.nome;
    };
    Produto.prototype.setNome = function (_no) {
        this.nome = _no;
    };
    Produto.prototype.getDetalhes = function () {
        return this.detalhes;
    };
    Produto.prototype.setDetalhes = function (_de) {
        this.detalhes = _de;
    };
    Produto.prototype.getPreco = function () {
        return this.preco;
    };
    Produto.prototype.setPreco = function (_pr) {
        this.preco = _pr;
    };
    Produto.prototype.getEstoque = function () {
        return this.estoque;
    };
    Produto.prototype.setEstoque = function (_es) {
        this.estoque = _es;
    };
    Produto.prototype.getLinkFoto = function () {
        return this.linkFoto;
    };
    Produto.prototype.setLinkFoto = function (_li) {
        this.linkFoto = _li;
    };
    Produto.prototype.getInfo = function () {
        var info;
        info = "PRODUTO: " + this.codigo + " / " + this.nome + " / " + this.detalhes + " / " + this.preco + " / " + this.estoque + " / " + this.linkFoto;
        return info;
    };
    return Produto;
}());
exports.Produto = Produto;
