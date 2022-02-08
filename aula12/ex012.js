function verhora(){
    let agora = new Date();
    let horas = agora.getHours()+':'+agora.getMinutes();
    let res = window.document.querySelector('div#res');

    
    res.innerHTML = `<p>Agora é ${horas}</p>`;

    if(horas > '05:00' && horas < '12:00'){
        res.innerHTML += 'Bom Dia!';
    }else if(horas >= '12:00' && horas < '18:00'){
        res.innerHTML += 'Boa Tarde!';
    }else if(horas > '18:01' && 'horas < 23:59'){
        res.innerHTML += 'Boa Noite!';
    }else{
        res.innerHTML += 'Boa madrugada!';
    }
    
}