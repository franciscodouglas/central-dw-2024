// operadores aritméticos
function calculadora(n1, n2, op){
    let res = 0;
    switch(op){
        case '+':
            res = n1 + n2
            break;
        case '-':
            res = n1 - n2
            break;
        case '*':
            res = n1 * n2
            break;
        case '/':
            res = n1 / n2
            break;
        default:
            console.log('Operador inválido')
        break;
    }
    console.log(res)
}

// n1 = parseInt(prompt('Digite o primeiro valor:'));
// n2 = parseInt(prompt('Digite o segundo valor:'));
// op = prompt('Digite o operador:');
// console.log(n1, n2, op)
// calculadora(n1, n2, op)
// função parseInt() para converter texto para inteiro
// falha de tipagem de dados


// concatenação de texto
function juntandoTexto(){
    let texto = 'Por do operador +'
    let texto2 = texto + ' eu consigo juntar textos'
    console.log(texto2)
}

// operadores de comparação
function somosMaiores(n1, n2){
    console.log("É maior:" + (n1 > n2));
    console.log('É maior:'+ (n2 > n1))
}
// somosMaiores(n1,n2)


function somosMenores(n1, n2){
    console.log('É menor:'+ (n1 < n2))
    console.log('É menor:'+ (n2< n1))
}
// somosMenores(n1,n2)

function somosDiferentes(n1, n2){
    console.log('É diferente:'+ (n1 != n2))
    console.log('É diferente:'+ (n2!= n1))
}
// somosDiferentes(n1,n2)
function somosIguais(n1, n2){   
    console.log('É igual:'+ (n1 == n2))
    console.log('É igual:'+ (n2== n1))
    // com dois iguais é verificado apenas o conteúdo
}
// somosIguais(n1,n2)
function somosIguaisTipagem(n1, n2){   
    console.log('É igual:'+ (n1 === n2))
    console.log('É igual:'+ (n2=== n1))

// com três iguais é verificado o conteúdo e a tipagem
}

// somosIguaisTipagem(n1,n2)
// somosIguais(10, '10')
somosIguaisTipagem(10, '10')