const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");

const optionsList = document.querySelectorAll(".option");

selected.addEventListener("click", () => {
  optionsContainer.classList.toggle("active");
});

optionsList.forEach(o => {
  o.addEventListener("click", () => {
    selected.innerHTML = o.querySelector("option").innerHTML;
    optionsContainer.classList.remove("active");
  });
});



$(document).ready(function () {
    $("#cpf").mask("000.000.000-00");
    $("#rg").mask("999.999.999-W", {

        translation: {

            'W': {

                pattern: /[X0-9]/

            }

        },

        reverse: true
    });
    $("#phone").mask("(00) 0000-0000");
    $("#cell").mask("(00) 0000-00009");
    $("#cell").blur(function (event) {

        if ($(this).val().length == 15) {

            $("#phone").mask("(00) 00000-0009")

        } else {

            $("#phone").mask("(00) 0000-00009")

        }

    })
    $("#cep").mask("00.000-000");
    $("#cnpj").mask("00.000.000/0000-00");
});