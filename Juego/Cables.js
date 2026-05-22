// script.js

const COLORS = [
  {
    name: "RED",
    color: "#ff3b3b"
  },
  {
    name: "BLUE",
    color: "#1f8fff"
  },
  {
    name: "GREEN",
    color: "#00c853"
  },
  {
    name: "YELLOW",
    color: "#ffc400"
  }
];

const NUMBERS = ["1", "2", "3", "4"];
const LETTERS = ["A", "B", "C", "D"];

const leftDiv = document.getElementById("left");
const rightDiv = document.getElementById("right");

const cover = document.getElementById("cover");
const board = document.getElementById("board");

/* ABRIR REJILLA */

cover.addEventListener("click", () => {

  cover.classList.add("open");

  setTimeout(() => {

    generatePuzzle();

    setTimeout(() => {

      askPlayer();

    }, 7000);

  }, 500);

});

/* SHUFFLE REAL */
function shuffle(array) {

  const arr = [...array];

  for (let i = arr.length - 1; i > 0; i--) {

    const j = Math.floor(Math.random() * (i + 1));

    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  return arr;
}

/* GENERAR PUZZLE */

let leftSide = [];
let rightSide = [];

function generatePuzzle() {

  leftDiv.innerHTML = "";
  rightDiv.innerHTML = "";

  leftSide = shuffle([...COLORS]);
  rightSide = shuffle([...COLORS]);

  // IZQUIERDA
  leftSide.forEach((wire, index) => {

    const div = document.createElement("div");

    div.classList.add("wire", "left-wire");

    div.style.background = wire.color;

    div.innerHTML = NUMBERS[index];

    leftDiv.appendChild(div);

  });

  // DERECHA
  rightSide.forEach((wire, index) => {

    const div = document.createElement("div");

    div.classList.add("wire", "right-wire");

    div.style.background = wire.color;

    div.innerHTML = LETTERS[index];

    rightDiv.appendChild(div);

  });

}

/* PREGUNTA */

function askPlayer() {

  closeGrid();

  setTimeout(() => {

    const input = prompt(
      "Conecta los cables correctamente.\n\nEjemplo:\nA1.B2.C3.D4"
    );

    if (!input) {
      alert("❌ Cancelado");
      return;
    }

    validateAnswer(input);

  }, 1000);

}

/* VALIDAR */

function validateAnswer(input) {

  const pairs = input
    .split(".")
    .map(x => x.trim().toUpperCase());

  // Evitar duplicados
  const unique = new Set(pairs);

  if (unique.size !== 4) {

    lose("Conexiones duplicadas.");

    return;
  }

  let correct = 0;

  for (const pair of pairs) {

    // Validacion formato
    if (pair.length !== 2) {

      lose("Formato incorrecto.");

      return;
    }

    const letter = pair[0];
    const number = pair[1];

    const rightIndex = LETTERS.indexOf(letter);
    const leftIndex = NUMBERS.indexOf(number);

    if (rightIndex === -1 || leftIndex === -1) {

      lose("Cable inválido.");

      return;
    }

    if (
      rightSide[rightIndex].name ===
      leftSide[leftIndex].name
    ) {
      correct++;
    }

  }

  if (correct === 4) {

    alert("✅ SISTEMA REPARADO");

  } else {

    lose("Los cables no coinciden.");

  }

}

/* DERROTA */

function lose(reason) {

  board.classList.add("shake");

  setTimeout(() => {
    board.classList.remove("shake");
  }, 350);

  alert("❌ ERROR: " + reason);

}

/* CERRAR */

function closeGrid() {

  cover.classList.remove("open");

}