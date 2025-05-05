//DOM

const horas = document.querySelector('#horas');
const minutos = document.querySelector('#minutos');
const segundos = document.querySelector('#segundos');
const dia = document.querySelector('#dia');
const mes = document.querySelector('#mes');
const ano = document.querySelector('#ano');
const mensagem = document.querySelector('#mensagem');
const corpo = document.querySelector('body')

//eventos

setInterval(relogio,1000)

//funções
function relogio(){
    const data = new Date();
    const hora = data.getHours();
    const minuto = data.getMinutes();
    const segundo = data.getSeconds();
    const day =  data.getDate();
    const month = data.getMonth() + 1;
    const year = data.getFullYear();

    if (hora >= 5 && hora < 12) {
        mensagem.textContent = 'Bom dia!';
        corpo.className = 'dia'
    } else if (hora >= 12) {
            mensagem.textContent = 'Boa tarde!';
        corpo.className = 'tarde'
    } else {hora >= 18
            mensagem.textContent = 'Boa noite!';
        corpo.className = 'noite'
    }


    //console.log(hora, minuto, segundo);                   
    horas.textContent = hora < 10 ? '0' + hora : hora;
    minutos.textContent = minuto < 10 ? '0' + minuto : minuto;
    segundos.textContent = segundo < 10 ? '0' + segundo : segundo;
    dia.textContent = day < 10 ? '0' + day : day;
    mes.textContent = month < 10 ? '0' + month : month;    
    ano.textContent = year < 10 ? '0' + year : year;
}