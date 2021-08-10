function solucao(obras) {
    let precoMaisAlto = 0
    let nomeDaObra = ''
	for (obra of obras){
        if(obra["valor"] > precoMaisAlto){
            precoMaisAlto = obra["valor"]
            nomeDaObra = obra["nome"]
        }
    }
    console.log(nomeDaObra)
    
}