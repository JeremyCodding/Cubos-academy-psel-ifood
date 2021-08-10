function solucao(obj) {
	if(obj["idade"] >= 60 && !obj["jaTomouVacina"]){
        console.log('APTA POR IDADE')
    }else if(obj['temComorbidade'] && !obj["jaTomouVacina"]){
        console.log('APTA POR COMORBIDADE')
    }else if(obj["jaTomouVacina"]){
        console.log('JA TOMOU VACINA')
    }else{
        console.log('INAPTA')
    }
    
}