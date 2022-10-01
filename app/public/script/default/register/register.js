$(document).ready(function(){
    $.validator.addMethod("usernameRegex", function(value, element) {
        return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(value);
    }, "Escreva no formato de e-mail. Exemplo: fulano@gmail.com");

    $.validator.addMethod("cpfRegex", function(value, element) {
        return /(\d{3})[.]?(\d{3})[.]?(\d{3})[-]?(\d{2})/.test(value);
    }, "CPF inválido");

    $(".next").click(function(){
        var form = $("#myform");
        form.validate({
            errorElement: 'span',
            errorClass: 'help-block',
            highlight: function(element, errorClass, validClass) {
                $(element).closest('.form-group').addClass("has-error");
            },
            unhighlight: function(element, errorClass, validClass) {
                $(element).closest('.form-group').removeClass("has-error");
            },
            rules: {
                user_name:{
                    required:true,
                    minlength:3,
                    maxlength:100
                },
                email: {
                    required: true,
                    usernameRegex: true
                },
                cpf:{
                    required:true,
                    cpfRegex:true,
                },
                genero:{
                    required: true,
                    usernameRegex: true
                },
                password : {
                    required: true,
                },
                conf_password : {
                    required: true,
                    equalTo: '#password',
                },
            },
            messages: {
                user_name:{
                    required:"Mínimo 3 caracteres",
                    maxlength:"Não ultrapasse 100 caracteres"
                },
                email: {
                    required: "Preencha esse campo",
                },
                cpf:{
                    required:"Preencha esse campo"
                },
                password : {
                    required: "Preencha esse campo",
                },
                conf_password : {
                    required: "Preencha esse campo",
                    equalTo: "As senhas não são compatíveis",
                },
                genero:{
                    required: "Escreva um gênero"
                }
            }
        });
        if (form.valid() === true){
            if ($('#test1').is(":visible")){
                current_fs = $('#test1');
                next_fs = $('#test2');
            }
            next_fs.show(); 
            current_fs.hide();
        }
    });
    
});