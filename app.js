// Función para encriptar el texto
function encriptar() {
    let texto = document.getElementById("texto").value;
    let textoEncriptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    // Actualizar el contenido del campo de presentación
    document.getElementById("textoEncriptado").innerText = textoEncriptado;
    document.getElementById("textoEncriptado").style.display = "block";
    document.querySelector(".imagen").style.display = "none";
    document.querySelector(".mensaje-inicial").style.display = "none";
    document.querySelector(".btn-copiar").style.visibility = "visible";
}

// Función para desencriptar el texto
function desencriptar() {
    let texto = document.getElementById("texto").value;
    let textoDesencriptado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    // Actualizar el contenido del campo de presentación
    document.getElementById("textoEncriptado").innerText = textoDesencriptado;
    document.getElementById("textoEncriptado").style.display = "block";
    document.querySelector(".imagen").style.display = "none";
    document.querySelector(".mensaje-inicial").style.display = "none";
    document.querySelector(".btn-copiar").style.visibility = "visible";
}

// Función para copiar el texto encriptado y pegarlo en el campo de entrada
function copiarTexto() {
    let textoEncriptado = document.getElementById("textoEncriptado").innerText;
    navigator.clipboard.writeText(textoEncriptado).then(function() {
        document.getElementById("texto").value = textoEncriptado;
    }).catch(function(error) {
        console.error("Error al copiar al portapapeles: ", error);
    });
}

