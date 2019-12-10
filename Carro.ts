export class Carro{
    private placa  : string;
    private cor    : string;
    private modelo : string;
    private ano    : number;
    private ligado : boolean;

    // metodos especificos (GETTERS e SETTERS)
    public getPlaca() : string{
        return this.placa;
    }
    public setPlaca(_placa: string): void{
        this.placa = _placa;
    }

    public getCor() : string{
        return this.cor;
    }
    public setCor(_cor: string): void{
        this.cor = _cor;
    }

    public getModelo() : string{
        return this.modelo;
    }
    public setModelo(_modelo: string): void{
        this.modelo = _modelo;
    }

    public setAno(_ano:number): void{
        if (_ano < 1900 || _ano > 2100){
            console.log("Ei! Valor para o ano do carro é inválido");
        }
        else{
            this.ano = _ano;
        }
    }
    public getAno(): number{
        return this.ano;
    }

    public getLigado() : boolean{
        return this.ligado;
    }
    public setLigado(_ligado: boolean): void{
        this.ligado = _ligado;
    }


    //

    public ligar(): void{
        this.ligado = true; 
        console.log(`O carro ${this.modelo} (${this.placa}) do ano ${this.ano} está ligado`);
    }

    public desligar(): void{
        this.ligado = false;
        console.log(`O carro ${this.modelo} (${this.placa}) do ano ${this.ano} está desligado`);
    }

    public andar(): void{
        if (this.ligado) {
        console.log("O carro "+this.modelo+" ("+this.placa+") do ano "+this.ano+" ta andando...");
    }
        else{
            console.log("Para andar, ligue o carro ");
        }
    }

    public parar(): void{
        if (this.ligado) {
        console.log(`O carro ${this.modelo} (${this.placa}) do ano ${this.ano} acabou de parar`);
    }
    else {
        console.log("Nao da para estacionar um carro desligado ");
    }
    }

    public getInfo(): string {
        var info : string;
        info = `CARRO: ${this.modelo} / ${this.ano} / ${this.placa} / ${this.cor} / ${this.ligado}`;
        return info;
    }
}
