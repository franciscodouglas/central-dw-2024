

document.getElementById('enviar').addEventListener('click', ()=>{
    //estou recuperando os valores que estão nos inputs e
    // armazendo em variaveis 
    let nome = document.getElementById('nome').value
    let email = document.getElementById('email').value
    let telefone = document.getElementById('telefone').value
    let cep = document.getElementById('cep').value
    let genero = document.getElementById('genero').value
   
    alert(nome +" " + " "+ email+ " " + telefone+ " "+ cep + " " + genero)

  
})

document.getElementById('cep').addEventListener('focusout', ()=>{
    let cep = document.getElementById('cep').value
    buscaCEP(cep)
})


// manipulando uma API em JS

async function buscaCEP(cep){
     const url = `https://viacep.com.br/ws/`+cep+'/json/'
    //tratamento exceção, para não causar parada no JS
    //fetch é uma função assincrona
    //assincrona = é uma função que tem um tempo de execução maior  (async)
    // peço para executar um função assincrona (await)
     try {
        let resposta = await fetch(url);
        if (!resposta.ok){
            throw new Error('Falha ao não localizar a URL')
        }

        let endereco = await resposta.json();

        if (endereco.erro){
            console.log('CEP NÃO ENCONTRADO')
        }else{
            console.log(endereco)

            document.getElementById('rua').value = endereco.logradouro
            document.getElementById('cidade').value = endereco.localidade  
        }
       


     } catch (error) {
        console.log(error)
     }

}