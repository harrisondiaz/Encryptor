const shift = 3; 

function encrypt() {
    let input = document.getElementById("input-text");
    let text = input.value;
  
    
    if (!/^[a-z\s]*$/.test(text)) {
      alert("Solo se permiten letras minúsculas y sin acentos.");
      return; 
    }
  
    let result = "";
  
    for (let i = 0; i < text.length; i++) {
      let char = text[i];
      let code = text.charCodeAt(i);
      if (char.match(/[a-z]/i)) {
        let limit = char === char.toUpperCase() ? 90 : 122;
        code += shift;
        if (code > limit) {
          code = code - 26;
        }
      }
      result += String.fromCharCode(code);
    }
    replace(result);
    return result;
}

function decrypt() {
  let input = document.getElementById("input-text");
  let text = input.value;

  
  if (!/^[a-z\s]*$/.test(text)) {
    alert("Solo se permiten letras minúsculas y sin acentos.");
    return; 
  }

  let result = "";

  for (let i = 0; i < text.length; i++) {
    let char = text[i];
    let code = text.charCodeAt(i);
    if (char.match(/[a-z]/i)) {
      let limit = char === char.toUpperCase() ? 90 : 122;
      code += -shift;
      if (code > limit) {
        code = code - 26;
      }
    }
    result += String.fromCharCode(code);
  }
  replace(result);
  return result;
}

function replace(text) {
  let div = document.getElementById("right-section");
  div.innerHTML = "";
  div.innerHTML = `
        <div class="result" >
        <p>${text}<p>
        <button class="decrypt-btn" onclick="copyToClipboard('${text}')">Copiar al portapapeles</button
        </div>
    `;
}

function copyToClipboard(text) {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      const successMessage = document.getElementById("copy-success");
      successMessage.classList.remove("hidden");

      setTimeout(() => {
        successMessage.classList.add("hidden");
      }, 3000);
    })
    .catch((err) => {
        console.error("Could not copy text: ", err);
    });
}
