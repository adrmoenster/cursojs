let data = new Date();
let hora = data.getHours() + ':' + data.getMinutes();
let reshora = window.document.querySelector('header#txthora');
let backg = window.document.querySelector('body');
let img = window.document.querySelector('section#apres');



if(hora < '12:00'){
    reshora.innerHTML = `<h2>Agora são ${hora} Horas</h2>`;
    img.innerHTML += `<img src="img/imgdia.png" alt="">`;
    backg.style.background = 'rgb(189, 131, 45)';
}else if(hora < '19:00'){
    reshora.innerHTML = `<h2>Agora são ${hora} Horas</h2>`;
    img.innerHTML += `<img src="img/imgtarde.png" alt="">`;
    backg.style.background = 'rgb(136, 41, 41)';
}else if(hora < '23:59'){
    reshora.innerHTML = `<h2>Agora São ${hora} Horas</h2>`;
    img.innerHTML += `<img src="img/imgnoite.png" alt="">`;
    backg.style.background = 'rgb(44, 42, 42)';
}else{

}




