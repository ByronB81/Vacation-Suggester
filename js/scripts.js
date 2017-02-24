// $("#blanks form").submit(function(event) {
//   var climateInput = ()"#preferredTemp").val();
//   console.log(climateInput);
//   event.preventDefault();
// });

$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var climateInput = $("input#climate").val();
    var activityInput = $("input#activity").val();
    var pricingInput= $("input#pricing").val();
    var varietyInput = $("input#variety").val();
    var nameInput = $("input#name").val();
    var addressInput = $("input#address").val();
    var emailInput = $("input#email").val();
    var childrenInput = $("input#children").val();

    $(.name).text(nameInput);
    // $(".person1").text(person1Input);
    // $(".person2").text(person2Input);
    // $(".animal").text(animalInput);
    // $(".exclamation").text(exclamationInput);
    // $(".verb").text(verbInput);
    // $(".noun").text(nounInput);
    //
    // $("#story").show();
    console.log("hi")
    event.preventDefault();
  });
});
