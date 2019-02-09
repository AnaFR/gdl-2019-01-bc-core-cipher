function comenzar() {
    document.getElementById("Instrucciones").style.display = "none";
    document.getElementById("appView").style.display = "inline";
}
document.getElementById("comenzar").addEventListener ("click", comenzar);

function ejecutaEncriptado() {  // botón encriptado
    const despl = parseInt(document.getElementById("cajaDesplazamientos").value); // pqeSeint
    let secret = document.getElementById("cajaTexto").value;
    let resultado; 
    
    resultado = cipher.encode( despl, secret); 
     
    document.getElementById("cajaResultado").value = resultado;
}
document.getElementById("encrip").addEventListener ("click", ejecutaEncriptado);

function ejecutaDesencriptado() { // botón desencriptado
    const despl = parseInt(document.getElementById("cajaDesplazamientos").value);
    let secret = document.getElementById("cajaTexto").value;
    let resultado; 
    resultado =cipher.decode( despl, secret); 
     
    document.getElementById("cajaResultado").value = resultado;
}
document.getElementById("descrip").addEventListener ("click", ejecutaDesencriptado);

document.getElementById("appView").style.display = "none";
function intentar(){
    document.getElementById("cajaDesplazamientos").value =" ";
    document.getElementById("cajaTexto").value =" ";
    document.getElementById("cajaResultado").value = " ";
}

document.getElementById("intentar").addEventListener ("click", intentar);

function regresar() {
    document.getElementById("appView").style.display = "none";
    document.getElementById("Instrucciones").style.display = "inline";
}

document.getElementById("Regresar").addEventListener ("click", regresar);
