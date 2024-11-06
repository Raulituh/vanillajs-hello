window.onload = function() {
  const valor = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  const palos = ["♠", "♣", "♥", "♦"];

  const indexNumber = Math.floor(Math.random() * valor.length);
  const indexPalos = Math.floor(Math.random() * palos.length);

  const valorRandom = valor[indexNumber];
  const palosRandom = palos[indexPalos];

  document.getElementById("number").innerText = valorRandom;
  document.getElementById("top-card").innerText = palosRandom;
  document.getElementById("bottom-card").innerText = palosRandom;

  const topCard = document.getElementById("top-card");
  const bottomCard = document.getElementById("bottom-card");

  if (palosRandom === "♥" || palosRandom === "♦") {
    topCard.classList.add("red");
    bottomCard.classList.add("red");
  } else {
    topCard.classList.add("black");
    bottomCard.classList.add("black");
  }
};
