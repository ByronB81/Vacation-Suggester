$("#blanks form").submit(function(event) {
  var climateInput = ()"#preferredTemp").val();
  console.log(climateInput);
  event.preventDefault();
});
