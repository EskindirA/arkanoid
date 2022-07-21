const blocks = document.querySelector(".blocks");
const handle = document.querySelector(".handle");
const user = document.querySelector(".user");
const speed = 20;
let currentUserPosition = 450;

class Block {
  constructor(id) {
    this.id = id;
  }
}

function addBlocks() {
  for (let i = 0; i < 12; i++) {
    const block = document.createElement("div");
    block.classList.add("block");
    blocks.appendChild(block);
  }
}

function draw(step) {
  let container = handle.getBoundingClientRect();
  let stick = user.getBoundingClientRect();

  let left = step < 0 && 0 < currentUserPosition;
  let right = step > 0 && container.width > currentUserPosition + stick.width;

  if (left || right) {
    currentUserPosition += step;
  }
  user.style.marginLeft = currentUserPosition + "px";
}

function moveHandle(e) {
  switch (e.key) {
    case "ArrowLeft":
      draw(speed * -1);
      break;
    case "ArrowRight":
      draw(speed);
      break;
    default:
      break;
  }
}

function init() {
  addBlocks();
  user.style.marginLeft = currentUserPosition + "px";
  document.addEventListener("keydown", moveHandle);
}

init();
