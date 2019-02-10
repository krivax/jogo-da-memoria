const $root = document.querySelector("#root");

const $cardsWrapper = createCardsWrapper();

const createMemoryCard = memoryCard();

// const $memoryCardGueio = createMemoryCard({
//   nameClass: "",
//   src: "images/icon-collabcode.png",
//   alt: "Gueio Mascote da collabcode"
// });
const $memoryCardJs = createMemoryCard({
  src: "images/-icon-js.png",
  alt: "icone livro javascript"
});
const $memoryCardC = createMemoryCard({
  src: "images/icon-c.png",
  alt: "icone livro C ++"
});
const $memoryCardPhp = createMemoryCard({
  src: "images/icon-php.png",
  alt: "icone livro PHP"
});
const $memoryCardResp = createMemoryCard({
  src: "images/icon-responsivo.png",
  alt: "icone de tela responsiva"
});

$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardResp);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJs);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardPhp);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardC);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJs);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardResp);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardC);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardPhp);

$root.insertAdjacentElement("beforeend", $cardsWrapper);
