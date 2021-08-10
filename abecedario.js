function solucao(letra, palavras) {
	let contador = 0
    for (palavra of palavras){
        if (palavra[0] != letra){
            contador = contador + 1
        }
    }
    console.log(contador)
}