import { Pessoa } from "./Pessoa";

export class Professor extends Pessoa{

    private valorHora: number;
    private numHoras:  number;
    private areaFormacao: string;

    public setValorHora(valorHora: number): void{
        this.valorHora = valorHora;
    }
    public getValorHora(): number{
        return this.valorHora;
    }

    public setNumHoras(numHoras: number): void{
        this.numHoras = numHoras;
    }
    public getNumHoras(): number{
        return this.numHoras;
    }

    public setAreaFormacao(areaFormacao: string): void{
        this.areaFormacao = areaFormacao;
    }
    public getAreaFormacao(): string{
        return this.areaFormacao;
    }

}