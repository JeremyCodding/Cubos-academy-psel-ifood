function solucao(sequencia) {
	indice = 0
    for(simbolo of sequencia){
        if(simbolo == '>'){
            if(indice == 6){
                indice = 0;
            }else{
                indice += 1;
            }
        }else{
            if(indice == 0){
                indice = 6;
            }else{
                indice -= 1
            }
        }
    }
    console.log(indice)
}