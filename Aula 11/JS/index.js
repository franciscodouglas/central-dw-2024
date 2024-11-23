// variaveis globais
// são normalmente declaradas no inicio do arquivo js

let varGlobal = "Eu sou uma var global";

console.log(varGlobal);

function exemploExterno(){
    alert("Olá Mundo em JS Externo")
    console.log('estou aqui no Console')
}

// criando uma função
// blocos de códigos, separado do restante do código. Ele permite re-utilizado
function testeVariaveis(){
    var idade = 26; //criando uma variavel
    console.log(idade); //imprimindo o conteudo da variavel
    idade =27; // re-atribuindo um valor a uma variável existente
    console.log(idade) 
    idade = idade +1; //incrementando o valor da variavel existente
    console.log(idade)
}

function testeVariaveisTipagem(){
    var idade = 26 //int
    var nome = "Francisco" //string
    var altura = 1.80 //float
    var possuiFaculdade = true //boolean
    var possuiPosGraduacao = false //boolean
    var vazio = null //vazio
    var genero //undifined
    var competencia = ['Python', 'Java', 'C#'] //array
    var objeto = {
        nome: 'Francisco',
        idade: 26,
        altura: 1.80
    } //objeto anônimo/independente - não é um objeto vinculado a uma classe

    console.log(idade, nome, altura, 
        possuiFaculdade, possuiPosGraduacao,
         vazio, genero, competencia, objeto)
}

function testeVar(){
    //var, let, const
    var x = 1
    console.log(x)
    if (x==1){
        var x =10
        console.log(x)
    }
    console.log(x)
    console.log(varGlobal);
}

function testeLet(){
    //var, let, const
    let x = 1
    if (x==1){
        let x =10
        console.log(x)
    }
    console.log(x)
}


function testeConst(){
    //var, let, const
    const x = 1
    if (x==1){
        const x =10
        console.log(10)
    }
    console.log(x)
}



// testeVariaveis(); //chamando a função para ser executada
// testeVariaveisTipagem();

testeVar();
testeLet();
testeConst();