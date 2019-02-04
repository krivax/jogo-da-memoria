const $root = document.querySelector("#root");

const $cardsWrapper = createCardsWrapper();
const $memoryCard = createMemoryCard(
  "",
  "images/icon-collabcode.png",
  "Gueio Mascote da collabcode"
);
const $memoryCardJs = createMemoryCard(
  "-front",
  "images/-icon-js.png",
  "icone livro javascript"
);
const $memoryCardC = createMemoryCard(
  "-front",
  "images/icon-c.png",
  "icone livro C ++"
);
const $memoryCardPhp = createMemoryCard(
  "-front",
  "images/icon-php.png",
  "icone livro PHP"
);
const $memoryCardResp = createMemoryCard(
  "-front",
  "images/icon-responsivo.png",
  "icone de tela responsiva"
);

$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardResp);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardResp);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardPhp);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardPhp);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardC);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardC);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJs);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJs);

$root.insertAdjacentElement("beforeend", $cardsWrapper);
