function geraDivs(... parametros : string[]): void{

    for (let i=0; i<parametros.length; i++){
       console.log(`<div id="id${i}"> ${parametros[i]} </div>`);
    }
} 

geraDivs("ValorA", "ValorB", "ValorC", "ValorD", "ValorE", "ValorF","ValorG");