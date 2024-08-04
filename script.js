let Textarea = document.querySelector(".text-area");

let mensaje = document.querySelector(".mensaje");




//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"


function BotonEncriptar () {
    let Textoencriptado = Encriptar(Textarea.value)
    mensaje.value = Textoencriptado
    Textarea.value = "";
    mensaje.style.backgroundImage = "none";
}



function Encriptar (stringEncriptado){
    let Matrizcodigo = [["e", "enter"], ["i" , "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase()

    for (let i = 0; i < Matrizcodigo.length; i++){
        if (stringEncriptado.includes(Matrizcodigo[i][0])) {
            stringEncriptado = stringEncriptado.replaceAll(Matrizcodigo[i][0], Matrizcodigo[i][1]);

        }
    }
    return stringEncriptado;

}


function Desencriptar (stringDesencriptado){
    let Matrizcodigo = [["e", "enter"], ["i" , "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase()

    for (let i = 0; i < Matrizcodigo.length; i++){
        if (stringDesencriptado.includes(Matrizcodigo[i][1])) {
            stringDesencriptado = stringDesencriptado.replaceAll(Matrizcodigo[i][1], Matrizcodigo[i][0]);

        }
    }
    return stringDesencriptado;

}

function BotonDesencriptar () {
    let Textoencriptado = Desencriptar(Textarea.value)
    mensaje.value = Textoencriptado
    Textarea.value = "";
}



function BotonCopiar () {
    mensaje.select(); 
    mensaje.setSelectionRange(0, 99999);
    try {
        document.execCommand('copy');
        alert("Texto copiado al portapapeles");
    } catch (err) {
        alert("Ocurrió un error al intentar copiar el texto");
    }

}