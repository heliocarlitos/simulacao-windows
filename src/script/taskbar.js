// src/js/clock.js

function actualizarHoraData() {
  const horaElemento = document.querySelector(".time");
  const dataElemento = document.querySelector(".date");

  const agora = new Date();

  // Formatar hora (HH:MM:SS)
  const horas = agora.getHours().toString().padStart(2, "0");
  const minutos = agora.getMinutes().toString().padStart(2, "0");
  const segundos = agora.getSeconds().toString().padStart(2, "0");
  horaElemento.textContent = `${horas}:${minutos}:${segundos}`;

  // Formatar data (DD/MM/AAAA)
  const dia = agora.getDate().toString().padStart(2, "0");
  const mes = (agora.getMonth() + 1).toString().padStart(2, "0");
  const ano = agora.getFullYear();
  dataElemento.textContent = `${dia}/${mes}/${ano}`;
}

// Actualiza a cada segundo
setInterval(actualizarHoraData, 1000);

// Actualiza imediatamente ao carregar
actualizarHoraData();
