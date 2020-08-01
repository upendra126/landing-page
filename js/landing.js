 jQuery(function ($) {

     $(document).ready(function () {
         $('form[name=foo]').submit(function (e) {
             var inputfName = $('#firstname');
             var inputlName = $('#lastname');
             var inputTitle = $('#title');
             var inputEmail = $('#email');
             var inputPhone = $('#phone');
             var inputClient = $('#client');
             var labelF = $('.first');
             var labelL = $('.last');
             var labelT = $('.title');
             var labelE = $('.email');
             var labelP = $('.phone');
             var labelC = $('.client');

             $("#client").change(function () {
                 var inputClient = $('#client :selected').val();
                 
                 if (inputClient == '1' || inputClient == '2') {

                     console.log(inputClient);
                     $("#client").css({
                         'border': '1px solid #ced4da'
                     });
                     $(".client").css({
                         'color': '#333333'
                     });

                     return false;
                 }

             });



             if (!inputfName.val()) {
                 inputfName.addClass('error')
                 labelF.addClass('errorlabel')
             } else {

                 inputfName.removeClass('error')
                 labelF.removeClass('errorlabel')
             }
             if (!inputlName.val()) {
                 inputlName.addClass('error')
                 labelL.addClass('errorlabel')


             } else {
                 inputlName.removeClass('error')
                 labelL.removeClass('errorlabel')


             }
             if (!inputTitle.val()) {
                 inputTitle.addClass('error')
                 labelT.addClass('errorlabel')

             } else {
                 inputTitle.removeClass('error')
                 labelT.removeClass('errorlabel')

             }
             if (!inputPhone.val()) {
                 inputPhone.addClass('error')
                 labelP.addClass('errorlabel')

             } else {
                 inputPhone.removeClass('error')
                 labelP.removeClass('errorlabel')

             }
             if (inputClient.val()) {
                 inputClient.addClass('error')
                 labelC.addClass('errorlabel')

             } else {
                 inputClient.removeClass('error')
                 labelC.removeClass('errorlabel')

             }

             if (!inputEmail.val()) {
                 inputEmail.addClass('error')
                 labelE.addClass('errorlabel')

             } else {
                 inputEmail.removeClass('error')
                 labelE.removeClass('errorlabel')

             }

             if (!(inputfName.val() && inputlName.val() && inputEmail.val() && inputTitle
                     .val() && inputPhone.val() && inputClient.val()))
                 e.preventDefault()
         })
     })


     $("#firstname").keypress(function (e) {
         var regex = new RegExp("^[a-zA-Z]+$");
         var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
         if (regex.test(str)) {
             return true;
         } else {
             e.preventDefault();
             $('.error').show();
             return false;
         }
     });
     $("#lastname").keypress(function (e) {
         var regex = new RegExp("^[a-zA-Z]+$");
         var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
         if (regex.test(str)) {
             return true;
         } else {
             e.preventDefault();
             $('.error').show();
             return false;
         }
     });
     $("#title").keypress(function (e) {
         var regex = new RegExp("^[a-zA-Z]+$");
         var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
         if (regex.test(str)) {
             return true;
         } else {
             e.preventDefault();
             $('.error').show();
             return false;
         }
     });

     $('#phone').keyup(function () {

         if (this.value != this.value.replace(/[^0-9\.]/g, '')) {
             this.value = this.value.replace(/[^0-9\.]/g, '');

         }

     });

     $('#email input').first().keyup(function () {
         $email = $(this).val(); // use val here to get value of input
         validateEmail($email);
     });

     function validateEmail($email) {
         var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
         if (!emailReg.test($email)) {
             alert('foo');
         } else {
             alert('bar');
         }
     }



 });