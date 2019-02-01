function createMemoryCard() {
  const $memoryCard = document.createElement("article");

  const $iconCollab = `
  <img 
  src='images/icon-collabcode.png' 
  alt='Gueio Mascote da collabcode' 
  class='icon' 
  />`;

  $memoryCard.classList.add("memory-card");
  $wrapCards.insertBefore($memoryCard, null);

  $memoryCard.insertAdjacentHTML("afterbegin", $iconCollab);
}

function createMemoryCardFront() {
  const $memoryCardFront = document.createElement("article");

  const $iconJs = `
 <img
    src="images/-icon-js.png"
    alt="icone livro javascript"
    class="icon"
  />`;

  $memoryCardFront.classList.add("memory-card", "-front");
  $wrapCards.insertBefore($memoryCardFront, null);

  $memoryCardFront.insertAdjacentHTML("afterbegin", $iconJs);
}
