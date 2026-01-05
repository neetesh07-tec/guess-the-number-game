var number = Math.floor(Math.random() * 100) + 1;
attampts = 0;

function CheckAnswer() {
  var usernumber = Number($("#user-input").val());
  if (!usernumber) return;
  attampts++;
  $("#attampts").text(
    "Attampts :" + (attampts < 11 ? "0" + attampts : attampts)
  );
  if (attampts == 10) {
    $(".message").text("😔 Game Over! The number was: " + number);
    $("#user-input").attr("disabled", true);
  } else if (usernumber == number) {
    $(".message").text("🎉 Congratulations! You succeeded: " + number);
    $("#user-input").attr("disabled", true);
  } else if (usernumber < number) {
    $(".message").text("⬇️ Too low! Try again.");
  } else if (usernumber > number) {
    $(".message").text("⬆️ Too high! Try again.");
  }
}

$("#submit").click(function () {
  CheckAnswer();
  $("#user-input").val("");
  $("#user-input").val("").focus();
});

$("#reset").click(function () {
  attampts = 0;
  $(".message").text("");
  $("#attampts").text("Attampts : 00");
  $("#user-input").val("");
  number = Math.floor(Math.random() * 100) + 1;
   $("#user-input").val("").focus();
    $("#user-input").attr("disabled", false);
});
