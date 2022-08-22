//função que recebe e envia para outro textarea pelo botão.

 function criptografar() {
     var frase = document.getElementById('informacao').value;
     var letras = []
    
    
    for (const i in frase) {
        letras.push(frase[i])
    }

    for (const i in letras) {
        if (letras[i] == "e"){
            letras.splice(i,1,"enter")
        }
        if (letras[i] == "i"){
            letras.splice(i,1,"imes")
        }
        if (letras[i] == "a"){
            letras.splice(i,1,"aif")
        }
        if (letras[i] == "o"){
            letras.splice(i,1,"ober")
        }
        if (letras[i] == "u"){
            letras.splice(i,1,"ufat")
        }
    }
    
    nome = letras.join('')
    document.getElementById('resposta').value = nome;
    document.getElementById('informacao').value = '';
    
    console.log(letras)
     
 }

 function descriptografar() {
    var frase = document.getElementById('informacao').value;
    
    for (const i in frase) {
        if (frase.indexOf('enter') !== -1){
            frase = frase.replace('enter','e')        
        }

        if (frase.indexOf('imes') !== -1){
            frase = frase.replace('imes','i')        
        }

        if (frase.indexOf('aif') !== -1){
            frase = frase.replace('aif','a')        
        }

        if (frase.indexOf('ober') !== -1){
            frase = frase.replace('ober','o')        
        }

        if (frase.indexOf('ufat') !== -1){
            frase = frase.replace('ufat','u')        
        }
    }
    document.getElementById('resposta').value = frase;
    console.log(frase)
    

    

 }


 function copiarTexto() {
    var resposta = document.getElementById("resposta");
    var textoCopiado = resposta;
    textoCopiado.select();
    document.execCommand('copy');
    alert('O texto é: ' + textoCopiado.value)
    console.log(textoCopiado)
 }

  
