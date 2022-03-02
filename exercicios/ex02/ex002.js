function verificaidade(){
    let dataatual = new Date();
    let dtdia = String(dataatual.getDate()).padStart(2, '0');// padStart() = Se iniciar de dia 1 a 9 adiciona valor zero ao inicio    
    let dtmes = String(dataatual.getMonth() + 1).padStart(2, '0');/*0=janeiro 1=fevereiro etc...*/// como mes começa a contar do zero e vai até o 11, então soma com mais um e dá o valor correspondente ao mes em questão, tambem usando padStart() assim como nos dias
    let dtano = dataatual.getFullYear();
    let datNac = document.querySelector('input#txtdata').value;
    let [anonac, me, di] = datNac.split('-');//Pegando data nacimento que vem do input e separando dia mes e ano
    let mesnac = me.padStart(2, '0');//Agora separado campo mes de nacimento e com 0 antes do mes se for menor que dois digitos
    let dianac = di.padStart(2, '0');//Agora separado campo dia de nacimento e com 0 antes do dia se for menor que dois digitos
    let sexo = document.querySelector('input[name="txtsexo"]:checked').value;//Pegando pela tag name em txtsexo e vindo só oque estiver como checked  
    let res = document.getElementById('res');
    let img = document.createElement("img");
    

    
    if(datNac.value != 0 && datNac.value != ' '){
        if(sexo == 'F'){
            res.innerHTML += 'Identificamos uma Mulher!';
            if (dtano >= anonac){
                let difAno = dtano - anonac;
                let difmes = dtmes - mesnac;
                let difdia = dtdia - dianac;
                
                if( difAno == 0){
                    img.src += "img/imgbebef.png";
                    
                    res.innerHTML += window.document.body
                    if(difmes < 1){                      
                        res.innerHTML += `Possui ${difdia} dia(s) de vida!`;
                    }else{
                        res.innerHTML += `Possui ${difmes} mese(s)!`;
                    }     
                
                }else if(difAno < 4){
                    res.innerHTML += 'Você possui menos de 4 anos de idade!';
                }else if(difAno < 10){
                    res.innerHTML += 'Possui menos de dez anos de idade!';
                }else if(difAno < 13){
                    res.innerHTML += 'Possui menos de 13 anos de idade!';
                }else if(difAno < 17){
                    res.innerHTML += 'possui menos de 17 anos de idade!';
                }else if(difAno < 23){
                    res.innerHTML += 'possui menos de 23 anos de idade!';
                }else if(difAno < 28){
                    res.innerHTML += 'possui menos de 28 anos de idade!';
                }else if(difAno < 35){
                    res.innerHTML += 'Possui menos de 35 anos de idade!';
                }else if(difAno < 43){
                    res.innerHTML += 'Possui menos de 43 anos de idade!';
                }else if(difAno < 58){
                    res.innerHTML += 'Possui menos de 58 anos de idade!';
                }else if(difAno < 67){
                    res.innerHTML += 'Possui menos de 67 anos de idade!';
                }else{
                    res.innerHTML += 'Possui 67 anos ou mais!'
                }
                document.body.appendChild(img);
            }else{
                res.innerHTML += `<p>Você ainda não existe!</p>`;
            }
            

        }else if(sexo == 'M'){
            res.innerHTML += `<p>Identificamos um Homem!</p>`;
      
            if (dtano >= anonac){
                let difAno = dtano - anonac;
                let difmes = dtmes - mesnac;
                let difdia = dtdia - dianac;
                
                if( difAno == 0){  
                    img.src = "img/imgbebem.png";                
                    if(difmes < 1){                      
                        res.innerHTML += `<p>de ${difdia} dia(s) de vida!</p>`;
                    }else{
                        res.innerHTML += `<p>de ${difmes} mese(s) de vida!</p>`;
                    }     
                
                }else if(difAno < 4){
                    res.innerHTML += 'é menor que quatro anos de idade!';
                }else if(difAno < 10){
                    res.innerHTML += 'Possui menos de dez anos de idade!';
                }else if(difAno < 13){
                    res.innerHTML += 'Possui menos de 13 anos de idade!';
                }else if(difAno < 17){
                    res.innerHTML += 'possui menos de 17 anos de idade!';
                }else if(difAno < 23){
                    res.innerHTML += 'possui menos de 23 anos de idade!';
                }else if(difAno < 28){
                    res.innerHTML += 'possui menos de 28 anos de idade!';
                }else if(difAno < 35){
                    res.innerHTML += 'Possui menos de 35 anos de idade!';
                }else if(difAno < 43){
                    res.innerHTML += 'Possui menos de 43 anos de idade!';
                }else if(difAno < 58){
                    res.innerHTML += 'Possui menos de 58 anos de idade!';
                }else if(difAno < 67){
                    res.innerHTML += 'Possui menos de 67 anos de idade!';
                }else{
                    res.innerHTML += 'Possui 67 anos ou mais!'
                }
                document.body.appendChild(img);
            }else{
                res.innerHTML += `<p>Você ainda não existe!</p>`;
            }
        }
    }else{
        res.innerHTML = `<p>Informe todos os dados solicitados e tente novamente!</p>`;
    }
}