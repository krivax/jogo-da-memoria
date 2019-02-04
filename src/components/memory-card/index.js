const createMemoryCard = (nameClass, src, alt) => `
  <article class="memory-card ${nameClass}">
    <img 
      src="${src}" 
      alt="${alt}" 
      class="icon" 
      onClick="handleClick()"
    />
  </article>
  `;

/*const createMemoryCardFront = () => `
  <article class="memory-card -front">
    <img
      src="images/-icon-js.png"
      alt="icone livro javascript"
      class="icon"
      onClick="handleClick()"
    />
  </article>
  `;*/

const handleClick = () => console.log("Aeee");
