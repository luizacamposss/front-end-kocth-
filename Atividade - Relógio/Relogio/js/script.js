//DOM

const horas = document.querySelector('#horas');
const minutos = document.querySelector('#minutos');
const segundos = document.querySelector('#segundos');

//eventos

setInterval(relogio,1000)

//funções
function relogio(){
    const data = new Date();
    const hora = data.getHours();
    const minuto = data.getMinutes();
    const segundo = data.getSeconds();
    //console.log(hora, minuto, segundo);                   
    horas.textContent = hora < 10 ? '0' + hora : hora;
    minutos.textContent = minuto < 10 ? '0' + minuto : minuto;
    segundos.textContent = segundo < 10 ? '0' + segundo : segundo;
}