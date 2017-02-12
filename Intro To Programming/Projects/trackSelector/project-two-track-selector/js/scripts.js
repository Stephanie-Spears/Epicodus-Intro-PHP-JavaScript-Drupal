$("h1").click(function() {
  alert("This is a header.");
});

$("div.my-menu").click(function() {
  alert("Redirecting to Epicodus Site.");
});

$("div.take-survey").click(function() {
  alert("Directing to track selector");
});


// $("my-survey.html").ready(function() {
// var question1 = $("input:radio[name=question1]:checked").val();
//
//     if (question1 === "checked") {
//       $("#answer1").show();
//     } else {
//       $("question2").show();
//     }
//
//     if (answer1 === "checked") {
//       $("#answer2").show();
//     } else {
//     $("#answer3").show();
//   }
//
//     event.preventDefault();
//
// });
