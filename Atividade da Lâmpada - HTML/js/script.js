//dom

const lampada = document.querySelector('#lampada')
const btligar = document.querySelector('#btligar')
const btdesligar = document.querySelector('#btdesligar')

//eventos

btligar.addEventListener('click',ligar)
btdesligar.addEventListener('click',desligar)

//funções

function ligar(){
    lampada.src = 'images/lampada-acesa.png'
}

function desligar(){
    lampada.src = 'images/lampada-apagada.png'
}