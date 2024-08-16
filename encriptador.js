
function encryptText() {
    
    let text = document.getElementById("texto").value;
  
    let encryptedText = text
      .replace(/e/gi, "enter")
      .replace(/i/gi, "imes")
      .replace(/a/gi, "ai")
      .replace(/o/gi, "ober")
      .replace(/u/gi, "ufat");
  
    if (text.length !== 0) {
      
      document.getElementById("salida").value = encryptedText;

      document.getElementById('img').setAttribute('hidden',true);
      document.getElementById('tit').setAttribute('hidden',true);
      document.getElementById('msj').setAttribute('hidden',true);

      document.getElementById('salida').removeAttribute('hidden');
      document.getElementById('copiar').removeAttribute('disabled');
     }
     else {
      
      document.getElementById("salida").value = "";

      document.getElementById('img').removeAttribute('hidden');
      document.getElementById('tit').removeAttribute('hidden');
      document.getElementById('msj').removeAttribute('hidden');

      document.getElementById('salida').setAttribute('hidden',true);
      document.getElementById('copiar').setAttribute('disabled',true);
  
      alert("Debes ingresar un texto");
    }
  }
  
  function decryptText() {

    let text = document.getElementById("texto").value;

    let decryptedText = text
      .replace(/enter/gi, "e")
      .replace(/imes/gi, "i")
      .replace(/ai/gi, "a")
      .replace(/ober/gi, "o")
      .replace(/ufat/gi, "u");
  
    if (text.length !== 0) {

      document.getElementById("salida").value = decryptedText;

      document.getElementById('img').setAttribute('hidden',true);
      document.getElementById('tit').setAttribute('hidden',true);
      document.getElementById('msj').setAttribute('hidden',true);

      document.getElementById('salida').removeAttribute('hidden');
      document.getElementById('copiar').removeAttribute('disabled');
    }
     else {
      document.getElementById("salida").value = "";

      document.getElementById('img').removeAttribute('hidden');
      document.getElementById('tit').removeAttribute('hidden');
      document.getElementById('msj').removeAttribute('hidden');

      document.getElementById('salida').setAttribute('hidden',true);
      document.getElementById('copiar').setAttribute('disabled',true);

      alert("Debes ingresar un texto");
    }
  }

  function copyElement() {
    let txtarea = document.getElementById("salida");

    if (window.isSecureContext && navigator.clipboard) {
      navigator.clipboard.writeText(txtarea.textContent);
    } else {
      unsecuredCopyToClipboard(txtarea.textContent);
    }
    //navigator.Clipboard.writeText(txtarea.textContent);
    alert("Se ha copiado el texto");
  }