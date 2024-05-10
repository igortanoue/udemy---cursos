function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`
}

function formataData(data) {
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const dia = zeroAEsquerda(data.getDate());
    const ano = data.getFullYear();
}

function getMes(mes) {
    let mesTexto;
    switch (mes) {
        case 0:
            mesTexto = 'Janeiro';
            return mesTexto;                     // precisa por o break.
        case 1:
            mesTexto = 'Fevereiro';
            return mesTexto;
        case 2:
            mesTexto = 'Março';
            return mesTexto;
        case 3:
            mesTexto = 'Abril';
            return mesTexto;
        case 4:
            mesTexto = 'Maio';
            return mesTexto;
        case 5:
            mesTexto = 'Junho';
            return mesTexto;
        case 6:
            mesTexto = 'Julho';
            return mesTexto;
        case 7:
            mesTexto = 'Agosto';
            return mes;
        case 8:
            mesTexto = 'Setembro';
            return mesTexto;
        case 9:
            mesTexto = 'Outubro';
            return mesTexto;
        case 10:
            mesTexto = 'Novembro';
            return mesTexto;
        case 11:
            mesTexto = 'Dezembro';
            return mesTexto;
        default:
            mesTexto = '';
    }
}

function getDiaSemanaTexto(diaSemana) {
    let diaSemanaTexto;

    switch (diaSemana) {
        case 0:
            diaSemanaTexto = 'Domingo';
            return diaSemanaTexto;                     // precisa por o break.
        case 1:
            diaSemanaTexto = 'Segunda-Feira';
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = 'Terca-Feira';
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = 'Quarta-Feira';
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = 'Quinta-Feira';
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = 'Sexta-feixa';
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto = 'Sabado';
            return diaSemanaTexto;
        default:
            diaSemanaTexto = '';
    }
}

const data = new Date();

const hora = zeroAEsquerda(data.getHours());
const min = zeroAEsquerda(data.getMinutes());
const dia = zeroAEsquerda(data.getDate());
const ano = data.getFullYear();

let diaSemana = data.getDay();
const diaSemanaTexto = getDiaSemanaTexto(diaSemana);

let mes = data.getMonth();
let mesTexto = getMes(mes);

const dataBrasil = formataData(data);

console.log(dataBrasil)
h1 = document.querySelector('h1#h1')

console.log(`${diaSemanaTexto}, ${dia} de ${mesTexto} de ${ano} <br> ${hora}:${min}`)

h1.innerHTML += `${diaSemanaTexto}, ${dia} de ${mesTexto} de ${ano} <br> ${hora}:${min}`
