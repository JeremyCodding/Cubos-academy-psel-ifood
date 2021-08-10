function solucao(precos) {
    let valor = 0;
    precos.sort(function(a, b) {
                    return a - b;
                });
    if (precos.length >= 5){
        for (preco of precos){
            valor = valor + preco;
        }
        valor = valor - precos[0];
    }else {
        for (preco of precos){
            valor = valor + preco
        }
    }
    console.log(valor)
}