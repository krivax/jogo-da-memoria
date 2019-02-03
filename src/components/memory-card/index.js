const createMemoryCard = () => `
  <article class="memory-card">
    <img 
      src='images/icon-collabcode.png' 
      alt='Gueio Mascote da collabcode' 
      class='icon' 
      onClick="handleClick()"
    />
  </article>
  `;

const createMemoryCardFront = () => `
  <article class="memory-card -front">
    <img
      src="images/-icon-js.png"
      alt="icone livro javascript"
      class="icon"
      onClick="handleClick()"
    />
  </article>
  `;

const handleClick = () => console.log("Aeee");
