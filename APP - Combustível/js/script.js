//DOM

const distancia = document.querySelector("#distancia");
const consumo = document.querySelector("#consumo");
const preco = document.querySelector("#preco");
const btcalculo = document.querySelector("#btcalculo");
const resultado = document.querySelector("#resultado");

//Eventos

btcalculo.addEventListener("click",viagem);

//Funções
function viagem(){
    d = Number(distancia.value);
    c = Number(consumo.value);
    p = Number(preco.value);

    formula = (d / c) * p;
    resultado.innerHTML = `O valor da viagem foi R$ ${formula.toFixed(2)}`;
}
