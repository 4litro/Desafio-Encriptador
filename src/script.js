
//Variables extraidas del HTML
const textArea = document.querySelector(".txt-box");
const mensaje = document.querySelector(".mensaje");
const copia = document.querySelector(".btn-copiar");

copia.style.display = "none"

function validarTexto() {
   //declaramos la viarable validar texto para que solo acepte caracteres letras de la a la z
   let textoEscrito = document.querySelector(".txt-box").value;
   let validador = textoEscrito.match(/^[a-z]*$/);

   if (!validador || validador === 0) {
      alert("Solo son permitidas letras minúsculas y sin acentos")
      location.reload();
      return true;
   }
}

function btnEncriptar() {
   if (!validarTexto()) {
      const textoEncriptado = encriptar(textArea.value)
      mensaje.value = textoEncriptado
      mensaje.style.backgroundImage = "none"
      textArea.value = "";
      copia.style.display = "block"
   }
}

//Laves de encriptacion
// `La letra "e" es convertida para "enter"`
// `La letra "i" es convertida para "imes"`
// `La letra "a" es convertida para "ai"`
// `La letra "o" es convertida para "ober"`
// `La letra "u" es convertida para "ufat"`

function encriptar(stringEncriptada) {
   let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
   stringEncriptada = stringEncriptada.toLowerCase()

   for (let i = 0; i < matrizCodigo.length; i++) {
      if (stringEncriptada.includes(matrizCodigo[i][0])) {
         stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

      }

   }
   return stringEncriptada
}

function btnDesencriptar() {
   const textoEncriptado = desencriptar(textArea.value)
   mensaje.value = textoEncriptado
   textArea.value = "";

}

function desencriptar(stringDesencriptada) {
   let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
   stringDesencriptada = stringDesencriptada.toLowerCase()

   for (let i = 0; i < matrizCodigo.length; i++) {
      if (stringDesencriptada.includes(matrizCodigo[i][1])) {
         stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])

      }

   }
   return stringDesencriptada
}



function copiar() {

   let copia = mensaje;
   
   copia.select();
   document.execCommand('copy');

   alert("Texto Copiado!");
}

function limpiar() {


   if (textArea.value != "" || mensaje.value != "") {
      textArea.value = "", mensaje.value = "";
      return 0;
   }



}