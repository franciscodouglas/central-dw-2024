function testeIF(){
    let idade = prompt('Qual sua idade?')
    if (idade >= 18){
        console.log('Maior de idade')
    } else {
        console.log('Menor de idade')
    }
}

// testeIF()
// testeELSEIF();
function testeELSEIF(){
    let idade = prompt('Qual sua idade?')
    if (idade<=12){
        console.log('Criança')
    }
    else if (idade>12 && idade<18){
        console.log('Adolescente')
    }
    else if (idade>=18 && idade<60){
        console.log('Adulto')
    }else{
        // não esta sendo verificado a tipagem do atributo
        // portanto, qualquer situação fora do elseif será idoso
        // colocando como incorreto
        console.log('Idoso')
    }
}
// testeSwitch();
function testeSwitch(){
    var grau_ensino = prompt('Qual seu grau de ensino?');
    switch (grau_ensino){
        case 'FI':
            console.log('Fundamental Incompleto')
            break;
        case 'FC':
            console.log('Fundamental Completo')
            break;
        case 'EMC':
            console.log('Ensino Médio Completo')
            break;
        case 'ESC':
            console.log('Ensino Superior Completo')
            break;
        default:
            console.log('Grau de Ensino Inválido');
            break;
    }
}
testeTernario()
function testeTernario(){
    let idade = prompt('Qual sua idade?')
    let mensagem = (idade >= 18) ? 'Maior de idade' : 'Menor de idade'
    console.log(mensagem)
}