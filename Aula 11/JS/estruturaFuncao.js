

// Características importantes da Função
// [1] assinatura da função: nome da função + parametros de entrada () 
// [2] retorno da função: saída de dados da função - return

// função simples 
function somar(a,b){
    let res = a + b
    return res;
}
// chamar uma função
console.log(somar(10,10))

//chamando a função e guardando o seu resultado
let response = somar (3,3)
console.log(response)

//função com variavel (expressa)

let subtrair = function (a,b){
    return a - b;
}

console.log(subtrair(1,1))
