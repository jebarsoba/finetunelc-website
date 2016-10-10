$(document).ready(function() {
  $("#submit").click(function() {
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
  });
});
