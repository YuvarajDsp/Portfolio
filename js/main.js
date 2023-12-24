$(document).ready(function(){
    $("#userform").validate({
        rules:{
            fname:{
                minlength:4,
            },
            pno:{
                minlength:10,
            },
            invalidHandler: function(form, validator) {
                var errors = validator.numberOfInvalids();
                if (errors) {
                  $("label").hide();
                }
                 else {
                  $("label").show();
                }
                 },
                 submitHandler: function(){
                   form.submit();
             },
        },
        messages: {
            fname:{
                required:"Please enter Your Full Name "
            },
            email_name:{
                required:"Please enter Your Current Email "
            },
            pno:{
                required:"Enter Your Current Moblie NO"
            }
        }
        
    })
});

