// script.js

const maze = document.getElementById("maze");
const path = document.getElementById("path");

const generateBtn = document.getElementById("generateBtn");
const finishBtn = document.getElementById("finishBtn");

const player = document.getElementById("player");

let segments = [];
let gameStarted = false;
let won = false;

const PATH_SIZE = 55;

generateBtn.addEventListener("click", () => {
  generateMaze();
});

finishBtn.addEventListener("click", () => {

  if (won) {
    generateMaze();
  }

});

function generateMaze() {

  won = false;
  gameStarted = true;

  path.innerHTML = "";
  segments = [];

  const mazeWidth = maze.clientWidth;
  const mazeHeight = maze.clientHeight;

  let currentX = 0;
  let currentY = mazeHeight / 2;

  player.style.left = currentX + "px";
  player.style.top = currentY - 9 + "px";

  const totalSegments = 6;

  for (let i = 0; i < totalSegments; i++) {

    // HORIZONTAL
    const horizontalLength =
      120 + Math.random() * 120;

    createSegment(
      currentX,
      currentY,
      horizontalLength,
      PATH_SIZE
    );

    currentX += horizontalLength;

    // VERTICAL RANDOM
    let direction =
      Math.random() > 0.5 ? 1 : -1;

    let verticalLength =
      80 + Math.random() * 120;

    let newY =
      currentY + direction * verticalLength;

    // LIMITES
    if (newY < 80) newY = 80;
    if (newY > mazeHeight - 80)
      newY = mazeHeight - 80;

    verticalLength = Math.abs(newY - currentY);

    createSegment(
      currentX - PATH_SIZE,
      Math.min(currentY, newY),
      PATH_SIZE,
      verticalLength + PATH_SIZE
    );

    currentY = newY;
  }

  // FINAL
  createSegment(
    currentX,
    currentY,
    mazeWidth - currentX,
    PATH_SIZE
  );
}

function createSegment(x, y, width, height) {

  const segment = document.createElement("div");

  segment.classList.add("segment");

  segment.style.left = x + "px";
  segment.style.top = y + "px";

  segment.style.width = width + "px";
  segment.style.height = height + "px";

  path.appendChild(segment);

  segments.push({
    x,
    y,
    width,
    height
  });
}

/* MOVIMIENTO DEL CURSOR */

maze.addEventListener("mousemove", (e) => {

  if (!gameStarted) return;

  const rect = maze.getBoundingClientRect();

  const mouseX = e.clientX - rect.left;
  const mouseY = e.clientY - rect.top;

  player.style.left = mouseX - 9 + "px";
  player.style.top = mouseY - 9 + "px";

  let insidePath = false;

  for (const seg of segments) {

    if (
      mouseX >= seg.x &&
      mouseX <= seg.x + seg.width &&
      mouseY >= seg.y &&
      mouseY <= seg.y + seg.height
    ) {
      insidePath = true;
      break;
    }
  }

  // TOCO ROJO
  if (!insidePath) {

    maze.classList.add("flash");

    setTimeout(() => {
      maze.classList.remove("flash");
    }, 300);

    alert("GAME OVER");

    gameStarted = false;

    return;
  }

  // GANAR
  if (mouseX >= maze.clientWidth - 20) {

    won = true;

  }

});

/* GENERAR PRIMER LABERINTO */
generateMaze();