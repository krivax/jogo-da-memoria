const formSingnup = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .form-signup{
        padding: 0 35px 40px;
      }
    `;

    $head.insertAdjacentElement("beforeend", $style);
  };

  module._children = () => {
    const $labelEmail = labelCollabcode.render("E-mail");
    const $inputEmail = inputCollabcode.render();

    const $labelUsername = labelCollabcode.render("Username");
    const $inputUsername = inputCollabcode.render();

    const $labelPassword = labelCollabcode.render("Password");
    const $inputPassword = inputCollabcode.render();
    const $labelConfPassword = labelCollabcode.render("Confirm Password");
    const $inputConfPassword = inputCollabcode.render();

    const $btnSubmit = btnCollabcode.render("Submit");

    return `
    ${$labelEmail}
    ${$inputEmail}
    
    ${$labelUsername}
    ${$inputUsername}

    ${$labelPassword}
    ${$inputPassword}
    
    ${$labelConfPassword}
    ${$inputConfPassword}
    
    ${$btnSubmit}`;
  };

  module.render = () => {
    module._style();
    return `<form class="form-signup" action="" method="POST">${module._children()}</form>`;
  };

  return {
    render: module.render
  };
})();
