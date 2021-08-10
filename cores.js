function solucao(cor1, cor2) {
    if(cor1 == 'vermelho'){
        if(cor2 == 'azul'){
            console.log('roxo')
        }else if(cor2 == 'amarelo'){
            console.log('laranja')
        }else if(cor2 == 'vermelho'){
            console.log('vermelho')
        }
    }else if(cor1 == 'amarelo'){
        if(cor2 == 'azul'){
            console.log('verde')
        }else if(cor2 == 'amarelo'){
            console.log('amarelo')
        }else if(cor2 == 'vermelho'){
            console.log('laranja')
        }
    }else if(cor1 == 'azul'){
        if(cor2 == 'azul'){
            console.log('azul')
        }else if(cor2 == 'amarelo'){
            console.log('verde')
        }else if(cor2 == 'vermelho'){
            console.log('roxo')
        }
    }

}
