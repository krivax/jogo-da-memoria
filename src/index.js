const $root = document.querySelector("#root");
const $memoryCard = document.createElement("article");
const $memoryCardOpen = document.createElement("article");
const $icon = `
  <img 
  src='images/icon-collabcode.png' 
  alt='Gueio Mascote da collabcode' 
  class='icon' 
  />`;
const $iconOpen = `
 <img 
  src='images/-icon-js.png' 
  alt='Livro JS' 
  class='icon -open ball' 
  />`;

$memoryCard.classList.add("memory-card");
$memoryCardOpen.classList.add("memory-card", "-open");

$root.insertBefore($memoryCard, null);
$root.insertBefore($memoryCardOpen, null);

$memoryCard.insertAdjacentHTML("afterbegin", $icon);
$memoryCardOpen.insertAdjacentHTML("afterbegin", $iconOpen);
