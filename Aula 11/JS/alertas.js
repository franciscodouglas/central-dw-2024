function testeAlert(){
    alert ('Eu sou um alerta')
}

function testeConfirm(){
   let resposta = confirm('Você esta ai?')
    console.log(resposta)
}

function testePrompt(){
   let nome = prompt('Qual seu nome?')
    console.log('Ola ' + nome)
}

testeAlert()
testeConfirm()
testePrompt()