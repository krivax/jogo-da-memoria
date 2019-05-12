const gameButton = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
    .game-button{
      width: 80px;
      height: 80px;
      border-radius: 50%;
      position: absolute;
      bottom: 15px;
      left: 50%;
      transform: translateX(-50%);
      background-color: #00b894;
      border: 3px solid #fffcee;
      color: #fffcee;
      font-weight: bold;
      font-size: 1.1em;
      text-transform: uppercase;
      cursor: pointer;
      box-shadow: 0px 4px 8px #3a4042;
    }`;
    $head.insertBefore($style, null);
  };

  module.render = content => {
    module._style();
    return `
  <button class="game-button">${content}</button>
  `;
  };

  return {
    render: module.render,
    handleClick: module.handleClick
  };
})();
