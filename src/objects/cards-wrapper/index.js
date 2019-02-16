function createCardsWrapper() {
  const $cardsWrapper = document.createElement("section");
  $cardsWrapper.classList.add("cards-wrapper");

  const $head = document.querySelector("head");
  const $style = document.createElement("style");
  $style.textContent = `
  .cards-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding-top: 8px;
  width: 100vw;
}

.cards-wrapper > div {
  margin-bottom: 8px;
}
`;

  $head.insertBefore($style, null);

  $cardsWrapper.addEventListener("click", event => {
    const $origin = event.target;

    $origin.closest(".memory-card.-active");
  });

  return $cardsWrapper;
}
