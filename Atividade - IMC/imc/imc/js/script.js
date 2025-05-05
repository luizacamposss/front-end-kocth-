//dom
const nome = document.querySelector('#nome');
const peso = document.querySelector('#peso');
const altura = document.querySelector('#altura');
const botao = document.querySelector('#botao');
const resultado = document.querySelector('#resultado');

//eventos
botao.addEventListener('click',imc)

//função

function imc(){
    n = nome.value
    p = Number(peso.value)
    a = Number(altura.value)

    calculo = p / (a * a)
    if(calculo < 18.5){
        situacao = 'Magreza'
    }
    else if(calculo < 24.9){
        situacao = 'Saudável'
    }
    else if(calculo < 29.9){
        situacao = 'Sobrepeso'
    }
    else if(calculo < 39.9){
        situacao = 'Obesidade'
    }
    else{
        situacao = 'Obesidade grave'
    }
    resultado.innerHTML = `Olá ${n}, seu IMC é ${calculo.toFixed(2)} e sua situação é ${situacao}`
}