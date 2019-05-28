const formLogin = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .form-login{
        padding: 0 35px 40px;
      }
    `;

    $head.insertAdjacentElement("beforeend", $style);
  };

  module._children = () => {
    const $labelEmail = labelCollabcode.render("Username ou E-mail");
    const $inputEmail = inputCollabcode.render("exemple@email.com");

    const $labelPassword = labelCollabcode.render("Password");
    const $inputPassword = inputCollabcode.render("******");

    const $btnSubmit = btnCollabcode.render("Login");

    return `
    ${$labelEmail}
    ${$inputEmail}

    ${$labelPassword}
    ${$inputPassword}

    
    ${$btnSubmit}`;
  };

  module.render = () => {
    module._style();
    return `<form class="form-login" action="" method="POST" >${module._children()}</form>`;
  };

  return {
    render: module.render
  };
})();
