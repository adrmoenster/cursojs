function verdia(){
let agora = new Date();
let diaSem = agora.getDay();
let res = window.document.querySelector('div#res');


switch(diaSem){
    case 0:
        res.innerHTML = 'Domingo';
        res.style.background = 'orange';
        break
    case 1:
        res.innerHTML = 'Segunda';
        res.style.background = 'red';
        break
    case 2:
        res.innerHTML = 'Terça';
        res.style.background = 'yellow';
        break
    case 3:
        res.innerHTML = 'Quarta';
        res.style.background = 'green';
        break
    case 4:
        res.innerHTML = "Quinta";
        res.style.background = 'blue';
        break
    case 5:
        res.innerHTML = 'Sexta';
        res.style.background = 'gray';
        break
    case 6:
        res.innerHTML = 'Sábado';
        res.style.background = 'coral';
        break
    default:
        res.innerHTML = 'Dia Inválido!'
        break
}
}
/*
    0 - Domingo
    1 - Segunda
    2 - Terça
    3 - Quarta
    4 - Quinta
    5 - Sexta
    6 - Sábado
*/