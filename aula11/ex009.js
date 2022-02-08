function nac(){
    let pais = window.document.getElementById('txtnac');
    
    let res = window.document.querySelector('div#res');
    res.innerHTML = `<p>Vivendo em ${pais.value}</p>`

    if(pais.value == 'Brasil' || pais.value == 'brasil'){     
        res.innerHTML += `<p>Você é Brasileiro, bem vindo!</p>`;
    }else{
        res.innerHTML += 'Você é estrangeiro!';
    }
}