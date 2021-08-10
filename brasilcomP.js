function solucao(primeiraLetra, segundaLetra, palavras) {
    listaDePalavras = []
	for(palavra of palavras){
        if (palavra[0] == primeiraLetra && palavra[1]== segundaLetra){
            listaDePalavras.push(palavra);
        }
    }
    if(listaDePalavras.length){
        for(palavra of listaDePalavras){
            console.log(palavra)
        }
    }else{
        console.log('NENHUMA');
    }
    

}