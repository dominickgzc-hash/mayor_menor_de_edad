function verificarEdad() {
  const edad = document.getElementById("edad").value;
  const resultado = document.getElementById("resultado");

  resultado.className = "";

  if (edad >= 18) {
    resultado.textContent = "ERES MAYOR DE EDAD";
    resultado.classList.add("mayor");
  } else if (edad > 0) {
    resultado.textContent = "ERES MENOR DE EDAD";
    resultado.classList.add("menor");
  } else {
    resultado.textContent = "Por favor ingresa una edad válida";
  }
}
