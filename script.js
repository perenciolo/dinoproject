const dino = document.querySelector(".dino");
const background = document.querySelector(".background");
let isJumping = false;
let position = 0;

function jump() {
  isJumping = true;
  let upInterval = setInterval(() => {
    if (position > 149) {
      clearInterval(upInterval);
      let downInterval = setInterval(() => {
        if (position < 1) {
          clearInterval(downInterval);
          isJumping = false;
          return;
        }
        position -= 20;
        dino.style.bottom = position + "px";
      }, 20);
      return;
    }
    position += 20;
    dino.style.bottom = position + "px";
  }, 20);
}

function handleKeyup(event) {
  if (event.keyCode === 32 && !isJumping) {
    jump();
  }
}

function createCactus() {
  const cactus = document.createElement("div");
  let cactusPosition = 1000;
  let randomTime = Math.random() * 6000;
  cactus.classList.add("cactus");
  cactus.style.left = cactusPosition + "px";
  background.appendChild(cactus);
  let leftInterval = setInterval(() => {
    if (cactusPosition < -60) {
      clearInterval(leftInterval);
      background.removeChild(cactus);
      return;
    }

    if (cactusPosition > 0 && cactusPosition < 60 && position < 60) {
      clearInterval(leftInterval);
      document.body.innerHTML = '<h1 class="gama-over">Fim de Jogo</h1>';
      return;
    }

    cactusPosition -= 10;
    cactus.style.left = cactusPosition + "px";
  }, 20);
  setTimeout(createCactus, randomTime);
}

createCactus();
document.addEventListener("keyup", handleKeyup);
