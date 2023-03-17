const keys = document.querySelectorAll(".keyboard li");

function getRandomNumber(min, max) {
  min = Math.floor(min);
  max = Math.ceil(max);
  return Math.ceil(Math.random() * (min - max + 1) + max);
}

function getRandomKey() {
  return keys[getRandomNumber(0, keys.length - 1)];
}

function targetRandomKey() {
  const key = getRandomKey();
  key.classList.add("selected");
}

document.addEventListener("keydown", (e) => {
  const keyPressed = e.key.toUpperCase();
  const keyElement = document.getElementById(keyPressed);
  const highlightedKey = document.querySelector(".selected");
  keyElement.classList.add("hit");

  keyElement.addEventListener("animationend", () => {
    keyElement.classList.remove("hit");
  });

  if (keyPressed === highlightedKey.innerHTML) {
    highlightedKey.classList.remove("selected");
    if (keyPressed === "CAPSLOCK") {
      keyElement.classList.remove("selected");
    }
    if (keyPressed === "BACKSPACE") {
      keyElement.classList.remove("selected");
    }
    targetRandomKey();
  }
});

targetRandomKey();
