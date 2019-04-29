const memoryCard = (function() {
  const create = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");
    $style.textContent = `
  .memory-card {
    width:155px;
    height:155px;
    position: relative;
  }
  .memory-card .card {
    width: 100%;
    height: 100%;
    background-color: #f25a70;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
    position: relative;
    cursor: pointer;
    position: absolute;
  }

  .memory-card.-active .card,
  .memory-card.-score .card{
    display:none;
  }

  .memory-card.-active .card.-front,
   .memory-card.-score .card.-front{
    display:flex;
  }

  .memory-card .card.-front {
    background-color: #fff;
  }

  .memory-card .card.-front::before {
    content: "";
    width: 95px;
    height: 95px;
    background-color: #d4d4d4;
    border-radius: 50%;
    position: absolute;
    
  }

  .memory-card .card > .icon {
    width: 100px;
    height: 100px;
  }

  .memory-card .card.-front > .icon {
    position: absolute;
    transform: translateY(-12px);
  }
`;
    $head.insertBefore($style, null);

    return ({ src, alt }) => `
  <div class="memory-card " onClick="memoryCard.handleClick(this)">
    <article class="card -front">
      <img 
        src="${src}" 
        alt="${alt}" 
        class="icon" 
      />
    </article>
     <article class="card">
      <img 
        src="images/icon-collabcode.png" 
        alt="Gueio Mascote da collabcode" 
        class="icon" 
      />
    </article>
    </div>
    `;
  };

  const handleClick = $component => {
    if (!$component.classList.contains("-active")) {
      activeMemorycard($component);
      checkSure();
    }
  };

  const activeMemorycard = $component => {
    if (qtdMemoryCardActive < 2) {
      $component.classList.add("-active");
    }
  };

  const checkSure = () => {
    if (qtdMemoryCardActive === 1) {
      const $activeMemorycards = document.querySelectorAll(
        ".memory-card.-active"
      );

      if (
        $activeMemorycards[0]
          .querySelector(".-front .icon")
          .getAttribute("src") ===
        $activeMemorycards[1].querySelector(".-front .icon").getAttribute("src")
      ) {
        store.score++;

        document.querySelector(".point-bar > .number").textContent =
          store.score;

        $activeMemorycards.forEach($memoryCard => {
          $memoryCard.classList.add("-score");
          $memoryCard.classList.remove("-active");
        });
      } else {
        setTimeout(() => {
          $activeMemorycards.forEach($memoryCard => {
            $memoryCard.classList.remove("-active");
          });
          qtdMemoryCardActive = 0;
        }, 1500);
      }
    }
  };
  return {
    create,
    handleClick
  };
})();
