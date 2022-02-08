function vidad(){
    let idade = window.document.querySelector('input#txtidade');
    let ida = Number(idade.value);
    let res = window.document.getElementById('res');

    res.innerHTML = `<p>Sua idade é ${ida} anos</p>`;
    if(ida < 1){
        res.innerHTML += `<p> Você ainda não nasceu</p>`;
    }
    else if(ida < 16){
        res.innerHTML += `<p>Você ainda é de menor, Não vota!</p>`;
    }else if(ida < 18){
        res.innerHTML += `<p>Com essa idade o voto ainda é Opcional!</p>`;
    }else if(ida < 65){
        res.innerHTML += `<p>Seu voto é obrigatório</p> `;
    }else if(ida >= 65){
        res.innerHTML += `<p>Possui mais de 60 anos, seu voto é opcional!</p>`;
    }else{
        res.innerHTML += `<p>Sua idade não se encaixa em nenum padrão de votação!</p>`;
    }
}