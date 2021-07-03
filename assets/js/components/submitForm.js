const submitForm = () => {
  const requiredInputs = document.querySelectorAll(".input--required");
  const codeArea = document.getElementsByTagName("code");
  const btn = document.querySelector("[data-form-btn]");

  btn.disabled = true;

  requiredInputs.forEach((input) => {
    document.addEventListener("input", function (e) {
      if (input.value === "") {
        btn.disabled = true;
      } else {
        btn.disabled = false;
      }
    });
  });

  if (codeArea.value === "") {
    btn.disabled = true;
  }

};

submitForm();
