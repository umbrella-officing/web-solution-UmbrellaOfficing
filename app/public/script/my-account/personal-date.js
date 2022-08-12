function dropdown(p){
    var e = document.getElementsByClassName('dropDown')[0];
    var d = ['block', 'none'];

    e.style.display = d[p];

    var t = ['0px', '0px,-10px'];
    setTimeout(function(){
        e.style.transform = 'translate('+t[p]+')';
    },0);
}

function option(o) {
    var item = document.getElementById('item-'+o).innerHTML;
    document.getElementsByTagName('input')[0].value = item
}


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