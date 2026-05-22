// script.js

const startBtn = document.getElementById("startBtn");
const countdown = document.getElementById("countdown");

startBtn.addEventListener("click", () => {

  // Ocultar boton
  startBtn.style.opacity = "0";

  setTimeout(() => {
    startBtn.style.display = "none";
  }, 400);

  // Mostrar countdown
  countdown.classList.remove("hidden");

  let numbers = ["3", "2", "1"];
  let index = 0;

  function showNumber() {

    countdown.textContent = numbers[index];

    // Reiniciar animacion
    countdown.style.animation = "none";
    countdown.offsetHeight;
    countdown.style.animation = "zoomFade 1s ease forwards";

    index++;

    if (index < numbers.length) {
      setTimeout(showNumber, 1000);
    }
  }

  showNumber();
});