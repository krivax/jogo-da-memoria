const logoWrapper = (function() {
  const module = {};

  module._style = active => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
    .logo-Wrapper{
      text-align: center;
      transform: translateY(-25%);
    }
    `;
    $head.insertAdjacentElement("beforeend", $style);
  };

  module.render = (...$children) => {
    module._style();
    return `
    <div class="logo-Wrapper">
    ${$children.join("")}
    </div>
    `;
  };

  return {
    render: module.render
  };
})();
