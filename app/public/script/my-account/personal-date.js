/*Script para selecionar o sexo: feminino ou masculino*/
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

/*Script Jquery adicionando as máscaras no formulário*/
$(document).ready(function () {
    $("#cpf_date").mask("000.000.000-00");
    $("#birth-date").mask("99/99/9999");
    $("#rg_date").mask("999.999.999-W", {

        translation: {

            'W': {

                pattern: /[X0-9]/

            }

        },

        reverse: true
    });
    $("#phone_date").mask("(00) 0000-0000");
    $("#cell_date").mask("(00) 0000-00009");
    $("#cell_date").blur(function (event) {

        if ($(this).val().length == 15) {

            $("#phone").mask("(00) 00000-0009")

        } else {

            $("#phone").mask("(00) 0000-00009")

        }

    })
    $("#cep_date").mask("00.000-000");
});