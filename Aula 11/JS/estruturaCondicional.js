function testeIF(){
    let idade = prompt('Qual sua idade?')
    if (idade >= 18){
        console.log('Maior de idade')
    } else {
        console.log('Menor de idade')
    }
}

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
        console.log('Idoso')
    }
}

