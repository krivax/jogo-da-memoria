const flatButton = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
    .flat-button {
      background-color: #eae6da;
      color: #fffcee;
      font-size:24px;
      font-weight: bold;
      border: none;
      width: 50%;
      height: 176px;
      text-transform: uppercase;
      cursor: pointer;
      position: absolute;
    }
    .flat-button.-right {
      background-color: #f25a70;
      position: relative;
      left: 50%;
      top: 0px;
    } 
    `;
    $head.insertAdjacentElement("beforeend", $style);
  };

  module.render = () => {
    module._style();
    return `<button class="flat-button">Log in</button>
    <button class="flat-button -right">Sign up</button>`;
  };
  return {
    render: module.render
  };
})();
