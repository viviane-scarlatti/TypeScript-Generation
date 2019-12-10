"use strict";
exports.__esModule = true;
var Carro = /** @class */ (function () {
    function Carro() {
    }
    // metodos especificos (GETTERS e SETTERS)
    Carro.prototype.getPlaca = function () {
        return this.placa;
    };
    Carro.prototype.setPlaca = function (_placa) {
        this.placa = _placa;
    };
    Carro.prototype.getCor = function () {
        return this.cor;
    };
    Carro.prototype.setCor = function (_cor) {
        this.cor = _cor;
    };
    Carro.prototype.getModelo = function () {
        return this.modelo;
    };
    Carro.prototype.setModelo = function (_modelo) {
        this.modelo = _modelo;
    };
    Carro.prototype.setAno = function (_ano) {
        if (_ano < 1900 || _ano > 2100) {
            console.log("Ei! Valor para o ano do carro é inválido");
        }
        else {
            this.ano = _ano;
        }
    };
    Carro.prototype.getAno = function () {
        return this.ano;
    };
    Carro.prototype.getLigado = function () {
        return this.ligado;
    };
    Carro.prototype.setLigado = function (_ligado) {
        this.ligado = _ligado;
    };
    //
    Carro.prototype.ligar = function () {
        this.ligado = true;
        console.log("O carro " + this.modelo + " (" + this.placa + ") do ano " + this.ano + " est\u00E1 ligado");
    };
    Carro.prototype.desligar = function () {
        this.ligado = false;
        console.log("O carro " + this.modelo + " (" + this.placa + ") do ano " + this.ano + " est\u00E1 desligado");
    };
    Carro.prototype.andar = function () {
        if (this.ligado) {
            console.log("O carro " + this.modelo + " (" + this.placa + ") do ano " + this.ano + " ta andando...");
        }
        else {
            console.log("Para andar, ligue o carro ");
        }
    };
    Carro.prototype.parar = function () {
        if (this.ligado) {
            console.log("O carro " + this.modelo + " (" + this.placa + ") do ano " + this.ano + " acabou de parar");
        }
        else {
            console.log("Nao da para estacionar um carro desligado ");
        }
    };
    Carro.prototype.getInfo = function () {
        var info;
        info = "CARRO: " + this.modelo + " / " + this.ano + " / " + this.placa + " / " + this.cor + " / " + this.ligado;
        return info;
    };
    return Carro;
}());
exports.Carro = Carro;
