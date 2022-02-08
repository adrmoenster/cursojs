function nac(){
    let pais = window.document.getElementById('txtnac');
    window.document.write(`<p>Vivendo em ${pais.value}</p>`);

    if(pais.value == 'Brasil' || pais.value == 'brasil'){
        window.document.write(`<p>Você é Brasileiro, bem vindo!</p>`);
    }else{
        window.document.write('Você é estrangeiro!');
    }
}