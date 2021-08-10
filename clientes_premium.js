function solucao(precos) {
    total = 0;
    for(preco of precos){
        total += preco;
    }
    if(total > 1000){
       certificadorPremium =[];
        certificadorVip = []
        for (const preco of precos){
            if(preco > 200){
                certificadorPremium.push(preco);
            }else{
                certificadorVip.push(preco)
            }
        }
        if(certificadorPremium.length){
            console.log('PREMIUM')
        }else if(certificadorVip.length){
            console.log('VIP')
        } 
    }
    else{
        console.log('NORMAL')
    }

}
