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
    const $inputEmail = inputCollabcode.render({
      placeholder: "exemple@email.com",
      type: "email"
    });
    const $labelPassword = labelCollabcode.render("Password");
    const $inputPassword = inputCollabcode.render({
      id: "password",
      placeholder: "sua senha",
      type: "password"
    });
    const $eyeCollabcode = eyeCollabcode.render({ attrFor: "password" });

    const $linkCollabcode = linkCollabcode.render({
      href: "#",
      content: "Forget password?"
    });

    const $btn = btnCollabcode.render({
      content: "Login",
      path: "game"
    });

    return `
    ${$labelEmail}
    ${$inputEmail}

    ${$labelPassword}
    ${$inputPassword}
    ${$eyeCollabcode}

    ${$linkCollabcode}
    
    ${$btn}`;
  };

  module.render = () => {
    module._style();
    return `<form class="form-login" action="" method="POST" >${module._children()}</form>`;
  };

  return {
    render: module.render
  };
})();
