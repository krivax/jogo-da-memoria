const flatButton = (function() {
  const module = {};

  module._id = 0;

  module._style = active => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
    .flat-button-${module._id} {
      background-color: ${active ? "#f25a70" : "#eae6da"} ;
      color: ${active ? "#fff" : "#fffcee"};
      font-size:24px;
      font-weight: bold;
      border: none;
      width: 50%;
      height: 176px;
      text-transform: uppercase;
      cursor: pointer;
    }
    .flat-button.-active{
      background-color: #f25a70;
      color: #fff;

    }
    `;

    $head.insertAdjacentElement("beforeend", $style);
  };

  module.render = (content = "", active = false) => {
    module._id++;
    module._style(active);
    return `<button class="flat-button-${module._id}">${content}</button>`;
  };
  return {
    render: module.render
  };
})();
