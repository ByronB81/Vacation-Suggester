$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var nameInput = $("input#name").val();
    var emailInput = $("input#email").val();
    console.log();
    var childrenInput= $("input#children").val();
    var climateInput = $("input#climate").val();
    var activityInput = $("input#activity").val();
    var pricingInput = $("input#pricing").val();
    var exoticInput = $("input#exotic").val();

    $(".name").text(nameInput);
    $(".email").text(emailInput);
    $(".children").text(childrenInput);
    $(".climate").text(climateInput);
    $(".activity").text(activityInput);
    $(".pricing").text(pricingInput);
    $(".exotic").text(exoticInput);

    $("#story").show();

    event.preventDefault();
  });
});
