$(document).ready(function() {
  $("form#vacationTest").submit(function(event) {
    event.preventDefault();
    var name = $("input:text#userName").val();
    var answer1 = $("input:radio[name=q1]:checked").val();
    var answer2 = $("input:radio[name=q2]:checked").val();
    var answer3 = $("input:radio[name=q3]:checked").val();
    var answer4 = $("input:radio[name=q4]:checked").val();
    var answer5 = $("input:radio[name=q5]:checked").val();
    var answer6 = $("input:radio[name=q6]:checked").val();
    // var answer7 = $("input.q7").val();
    // var answer8 = $("input.q8").val();
    // var answer9 = $("input.q9").val();
    // var answer10 = $("input.q10").val();

    var hawaiiPts = 0;
    var thailandPts = 0;
    var australiaPts = 0;
    var alaskaPts = 0;
    var europePts = 0;

    if (answer1 === "option1") {
      hawaiiPts += 1;
      thailandPts += 1;
      australiaPts += 1;
    } else if (answer1 === "option2") {
      alaska += 1;
    } else if (answer1 === "option3") {
      europePts += 1;
    }

    if (answer2 === "option1") {
      thailandPts += 1;
    } else if (answer2 === "option2") {
      hawaiiPts += 1;
      australiaPts  += 1;
    } else if (answer2 === "option3") {
      alaskaPts += 1;
      europePts += 1;
    }

    if (answer3 === "option1") {
      hawaiiPts += 1;
      australiaPts += 1;
    } else if (answer3 === "option2") {
      alaskaPts += 1;
      europePts += 1;
    } else if (answer3 === "option3") {
      thailandPts += 1;
    }

     if (answer4 === "option1") {
      alaskaPts += 1;
      australiaPts += 1;
    } else if (answer4 === "option2") {
      hawaiiPts += 1;
      europe += 1
    } else if (answer4 === "option3") {
      thailandPts += 1;
    }

     if (answer5 === "option1") {
      hawaii += 1;
    } else if (answer5 === "option2") {
      australiaPts += 1;
      thailandPts += 1;
    } else if (answer5 === "option3") {
      alaska += 1;
      europePts += 1;
    }

     if (answer6 === "option1") {
      thailandPts += 1;
      australiaPts += 1;
      hawaiiPts += 1;
    } else if (answer6 === "option2") {
      europePts += 1;
    } else if (answer6 === "option3") {
      alaskaPts += 1;
    }

    var winner = parseInt(Math.max(hawaiiPts, thailandPts, australiaPts, alaskaPts, europePts));

    if (hawaiiPts === winner) {
      $('.col-md-6').slideUp();
      $('#hawaii').fadeIn();
      alert(name + "! Remember to bring a swimsuit!");
    }

    if (thailandPts === winner) {
      $('.col-md-6').slideUp();
      $('#thailand').fadeIn();
      alert("Get ready for good food, " + name + "!");
    }

    if (australiaPts === winner) {
      $('.col-md-6').slideUp();
      $('#australia').fadeIn();
      alert("Crikey, " + name + "! Get ready for some fun down undah!");
    }

    if (alaskaPts === winner) {
      $('.col-md-6').slideUp();
      $('#alaska').fadeIn();
      alert("Pack a jacket and binoculars, " + name + ", it'll be cold but beautiful!");
    }

    if (europePts === winner) {
      $('.col-md-6').slideUp();
      $('#europe').fadeIn();
      alert("It's the classic vacation, " + name + " - I'm sure you'll have fun!");
    }
  });
});
