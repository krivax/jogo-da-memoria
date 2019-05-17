const logoCollabcode = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
    .logo-collabcode {
      display: inline-block;
      border: solid 40px #fff;
      border-radius: 50%;
      background-color: #fff;
    }
    .logo-collabcode > .logo {
       width: 175px;
      
    }
    `;
    $head.insertAdjacentElement("beforeend", $style);
  };

  module.render = () => {
    module._style();

    return `
    <figure class="logo-collabcode" >
    <img class="logo" src="/images/icon-collabcode.png" alt="Logo CollabCode"/>
    </figure>`;
  };
  return {
    render: module.render
  };
})();
