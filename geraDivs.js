function geraDivs() {
    var parametros = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        parametros[_i] = arguments[_i];
    }
    for (var i = 0; i < parametros.length; i++) {
        console.log("<div id=\"id" + i + "\"> " + parametros[i] + " </div>");
    }
}
geraDivs("ValorA", "ValorB", "ValorC", "ValorD", "ValorE", "ValorF", "ValorG");
