$(document).ready(function() {
  $("#shoutBack").submit(function(event) {
  var shoutTextInput = $("input#shoutText").val();
  var shoutCaps = shoutTextInput.toUpperCase();
  $(".shoutText").text(shoutTextInput);
  $(".shoutCaps").text(shoutCaps);
  event.preventDefault();
  });
});
