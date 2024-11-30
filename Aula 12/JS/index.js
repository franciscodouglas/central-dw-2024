
// querySelector vai procurar o primeiro elemento HTML que atende 
document.querySelector("button").addEventListener("click", () => {
    alert('Sou um evento externo')
});

//getElementByID

document.getElementById('meuBotao').addEventListener("click", () =>
{ 
    console.log(document.getElementById('nome').value)
    let nome =  document.getElementById('nome').value;

    alert ('Seu nome é:'+ nome)

});
   
