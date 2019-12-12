"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Pessoa_1 = require("./Pessoa");
var Professor = /** @class */ (function (_super) {
    __extends(Professor, _super);
    function Professor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Professor.prototype.setValorHora = function (valorHora) {
        this.valorHora = valorHora;
    };
    Professor.prototype.getValorHora = function () {
        return this.valorHora;
    };
    Professor.prototype.setNumHoras = function (numHoras) {
        this.numHoras = numHoras;
    };
    Professor.prototype.getNumHoras = function () {
        return this.numHoras;
    };
    Professor.prototype.setAreaFormacao = function (areaFormacao) {
        this.areaFormacao = areaFormacao;
    };
    Professor.prototype.getAreaFormacao = function () {
        return this.areaFormacao;
    };
    return Professor;
}(Pessoa_1.Pessoa));
exports.Professor = Professor;
