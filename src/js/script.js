"use strict";

const images = ["src/img/Audi.jpg", "src/img/BMW.jpg", "src/img/Mercedes.jpg"],
  avatarsDB = [
    "src/img/mini-audi.png",
    "src/img/mini-bmw.png",
    "src/img/mini-mercedes.png"
  ];

const cards = document.querySelectorAll(".card"),
  cardsImgs = document.querySelectorAll("img"),
  cardBg = document.querySelectorAll(".front-bg"),
  front = document.querySelectorAll(".front"),
  back = document.querySelectorAll(".back"),
  specifications = document.querySelectorAll(".specifications"),
  avatars = document.querySelectorAll(".avatar");

cards.forEach((card, i) => {
  cardsImgs[i].src = images[i];
  avatars[i].style.backgroundImage = `url(${avatarsDB[i]})`;

  cards[i].addEventListener("mouseover", e => {
    cardBg[i].style.background = "rgba(13, 13, 13, 0)";
    cards[i].classList.add("active");
    specifications[i].style.color = "#ffffff";

    cards.forEach(item => {
      item.style = "filter: blur(10px);";
      cards[i].style = "";
    });
  });

  cards[i].addEventListener("mouseout", () => {
    cardBg[i].style.background = "";
    cards[i].classList.remove("active");
    cards.forEach(item => {
      item.style = "";
    });
  });

  function addTransformRotate180deg(elem) {
    elem.forEach(item => {
      item.style = "transform: rotateY(180deg)";
    });
  }

  addTransformRotate180deg(back);

  function rotateThis(elem, elem2) {
    elem[i].addEventListener("click", () => {
      elem[i].style = "transform: rotateY(180deg);";
      elem2[i].style = "transform: rotateY(360deg);";
    });
  }

  rotateThis(front, back);
  rotateThis(back, front);
});
