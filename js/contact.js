/*$(document).ready(function() {*/
var vm = {
    emailAddress: ko.observable().extend({ required: true }).extend({ email: true }),
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
