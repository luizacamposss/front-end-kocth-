//dom

const btsilhueta = document.querySelector('#silhueta')
const btraiva = document.querySelector('#btraiva')
const btalegria = document.querySelector('#btalegria')
const btnojinho = document.querySelector('#btnojinho')
const bttristeza = document.querySelector('#bttristeza')

//eventos

btraiva.addEventListener('click',raiva)
btalegria.addEventListener('click',alegria)
btnojinho.addEventListener('click',nojinho)
bttristeza.addEventListener('click',tristeza)

//funções

function raiva(){
    silhueta.src = 'images/raiva.png'
    document.body.style.background = 'linear-gradient(red, white)'
}
function alegria(){
    silhueta.src = 'images/alegria.png'
    document.body.style.background = 'linear-gradient(yellow, white)'
}
function nojinho(){
    silhueta.src = 'images/nojinho.png'
    document.body.style.background = 'linear-gradient(green, white)'
}
function tristeza(){
    silhueta.src = 'images/tristeza.png'
    document.body.style.background = 'linear-gradient(blue, white)'
}