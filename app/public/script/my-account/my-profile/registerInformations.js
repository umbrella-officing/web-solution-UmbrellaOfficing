$(document).ready(function(){ 
    $("#edit_ad").click(function(){
        var form = $("#myformProfile"); 
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
                about_me:{
                    required:true,
                    minlength:3,
                    maxlength:150
                },
                profession_profile: {
                    required:true,
                    minlength:3,
                    maxlength:150
                },
            },
            messages: {
                about_me:{
                    required:"Preencha esse campo",
                    minlength:"Mínimo 3 caracteres",
                    maxlength:"Não ultrapasse 150 caracteres"
                },
                profession_profile:{
                    required:"Preencha esse campo",
                    minlength:"Mínimo 3 caracteres",
                    maxlength:"Não ultrapasse 150 caracteres"
                }     
            }
        }); 
    });

    
    
});