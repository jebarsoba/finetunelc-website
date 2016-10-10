var vm = {
    emailAddress: ko.observable().extend({ required: { message: 'Por favor ingrese su email.' } }).extend({ email: { message: 'Por favor ingrese una dirección de email válida.' } }),
    emailMessage: ko.observable().extend({ required: { message: 'Por favor ingrese su mensaje.' } }),
    submit: function() {
      if (vm.errors().length === 0) {
        var name = $("#name").val();
        var email = $("#email").val();
        var message = $("#message").val();

        $.post("send-email.php", {
            name1: name,
            email1: email,
            message1: message
          }, function(data, status) {
              $("#contact-form").css("display", "none");
              $("#returnmessage").css("display", "block");
          });
      }
      else {
          vm.errors.showAllMessages();
      }
    }
}

vm.errors = ko.validation.group(vm);

ko.applyBindings(vm);
