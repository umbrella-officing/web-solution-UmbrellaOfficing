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
    $("#cep_date").mask("000.000-000");
});

$(document).ready(function() {

    function limpa_formulário_cep() {
        // Limpa valores do formulário de cep.
        $("#road_date").val("");
        $("#number_date").val("");
        $("#neighborhood_date").val("");
        $("#city_date").val("");
        $("#state_date").val(""); 
    }
    
    //Quando o campo cep perde o foco.
    $("#cep_date").blur(function() {

        //Nova variável "cep" somente com dígitos.
        var cep = $(this).val().replace(/\D/g, '');

        //Verifica se campo cep possui valor informado.
        if (cep != "") {

            //Expressão regular para validar o CEP.
            var validacep = /^[0-9]{8}$/;

            //Valida o formato do CEP.
            if(validacep.test(cep)) {

                //Preenche os campos com "..." enquanto consulta webservice.
                $("#road_date").val("..."); 
                $("#neighborhood_date").val("...");
                $("#city_date").val("...");
                $("#state_date").val("...");

                //Consulta o webservice viacep.com.br/
                $.getJSON("https://viacep.com.br/ws/"+ cep +"/json/?callback=?", function(dados) {

                    if (!("erro" in dados)) {
                        //Atualiza os campos com os valores da consulta.
                        $("#road_date").val(dados.logradouro); 
                        $("#neighborhood_date").val(dados.bairro);
                        $("#city_date").val(dados.localidade);
                        $("#state_date").val(dados.uf);
                    } //end if.
                    else {
                        //CEP pesquisado não foi encontrado.
                        limpa_formulário_cep();
                        alert("CEP não encontrado.");
                    }
                });
            } //end if.
            else {
                //cep é inválido.
                limpa_formulário_cep();
                alert("Formato de CEP inválido.");
            }
        } //end if.
        else {
            //cep sem valor, limpa formulário.
            limpa_formulário_cep();
        }
    });
});