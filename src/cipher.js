window.cipher = {        //objeto 

    encode:function (desplazamientos, texto) {  // encriptado
        if (desplazamientos > 33) {
            alert("Solo se permiten desplazamientos del 1 al 33");   //muestra alerta cuando el usuario hace un offset >33
            return;
        }
        let secreto = "";   
        let textoOriginal = texto;
        texto = texto.toUpperCase ();
        for (let indiceLetraActual = 0; indiceLetraActual<texto.length; indiceLetraActual++) { // ciclo for
            const codigoASCII = (texto.charCodeAt(indiceLetraActual)-65+desplazamientos)%26+65; // formúla
            if (texto[indiceLetraActual] == " ") secreto = secreto + " ";  
            else if (texto [indiceLetraActual]== "Ñ") secreto = secreto + "-";
            else { 
                let caracterEncrip =  String.fromCharCode(codigoASCII);
                if (textoOriginal[indiceLetraActual] == texto[indiceLetraActual])
                    secreto = secreto + caracterEncrip;
                else secreto = secreto + caracterEncrip.toLowerCase ();   //hacker edition mayusculas y minusculas 
            }
        }
        return secreto;    
    },

decode:function (desplazamientos, texto) {   // desencriptado
    if (desplazamientos > 33) {
        alert("Solo se permiten desplazamientos del 1 al 33");
        return;
    }
    let revelado = "";
    let textoOriginal = texto;
    texto = texto.toUpperCase ();
    for (let indiceLetraActual = 0; indiceLetraActual<texto.length; indiceLetraActual++) {
        const codigoDesencriptado = (texto.charCodeAt(indiceLetraActual)+ 65-desplazamientos)%26+65;
        if (texto[indiceLetraActual] == " ") revelado = revelado +" ";
        else if (texto [indiceLetraActual] == "-") revelado = revelado +"Ñ";
        else {
            let cararcterDesencrip =  String.fromCharCode(codigoDesencriptado);
            if (textoOriginal[indiceLetraActual] == texto[indiceLetraActual])
                revelado = revelado + cararcterDesencrip;
            else revelado = revelado + cararcterDesencrip.toLowerCase ();
        }
    }
    return revelado;
}
};
