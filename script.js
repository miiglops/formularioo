
var nometxt = document.getElementById('nome').value
var emailtxt = document.getElementById('email').value
var senhatxt = document.getElementById('senha').value
var cartaotxt = document.getElementById('cartao').value
var cvvtxt = document.getElementById('cvv').value
var datatxt = document.getElementById('data').value


var nome2 = document.getElementById ('nome2')
var email2 = document.getElementById('email2')
var senha2 = document.getElementById('senha2')
var cartao2 = document.getElementById('cartao2')
var cvv2 = document.getElementById('cvv2')
var data2 = document.getElementById('data2')


function pagina(){
    nome2.innerText+= (nometxt)
    email2.innerHTML += (emailtxt)
    senha2.innerHTML += (senhatxt)
    cartao2.innerHTML += (cartaotxt)
    cvv2.innerHTML += (cvvtxt)
    data2.innerHTML += (datatxt)
}
