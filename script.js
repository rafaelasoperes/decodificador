//função que recebe e envia para outro textarea pelo botão

 function criptografar() {
    

    var frase = document.getElementById('informacao').value
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
            letras.splice(i,1,"ai")
        }
        if (letras[i] == "o"){
            letras.splice(i,1,"ober")
        }
        if (letras[i] == "u"){
            letras.splice(i,1,"ufat")
        }
    }
    letras.join('')
    nome = letras.toString()
    
    document.getElementById('resposta').value = nome
    console.log(letras)
     
 }

 







/*function copy() {
    let copyText = document.querySelector("#input");
    copyText.select();
    document.execCommand("copy ");
}
  
document.querySelector("#copy").addEventListener("click", copy);*/
