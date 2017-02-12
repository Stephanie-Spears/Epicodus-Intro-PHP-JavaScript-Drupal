
var epicodusTracks = [
  {
    "title": "PHP/Drupal",
    "details": "PHP (recursive acronym for PHP: Hypertext Preprocessor) is a widely-used open source general-purpose scripting language that is especially suited for web development and can be embedded into HTML.",
    "link" : "<a href='https://www.epicodus.com/php/'>Learn more</a>"
  },
  {
    "title": "Ruby/Rails",
    "details": "Ruby on Rails, or simply Rails, is a server-side web application framework written in Ruby under the MIT License. Rails is a model view controller (MVC) framework, providing default structures for a database, a web service, and web pages.",
    "link" : "<a href='https://www.epicodus.com/ruby/'>Learn more</a>"
  },
  {
    "title": "Java/Android",
    "details": "Android is a mobile operating system developed by Google, based on the Linux kernel and designed primarily for touchscreen mobile devices such as smartphones and tablets.",
    "link" : "<a href='https://www.epicodus.com/java/'>Learn more</a>"
  },
  {
    "title": "CSS/Design",
    "details": "Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language. ... CSS is designed primarily to enable the separation of document content from document presentation, including aspects such as the layout, colors, and fonts.",
    "link" : "<a href='https://www.epicodus.com/css/'>Learn more</a>"
  },
  {
    "title": "C#/.NET",
    "details": "NET is a framework which provides 'ground' for applications which are created to use it. These application can be created using different programming languages: C# (very common), Visual Basic .NET, F#, Managed C++ and even directly in MSIL (=Microsoft Intermediate Language, its what .net applications are compiled to).",
    "link" : "<a href='https://www.epicodus.com/c-sharp/'>Learn more</a>"
  }
];

for (var i = 0; i < epicodusTracks.length; i++) {
  // for (var x = 0; x < epicodusTracks.length; x++)
  if (i === 0) {
    document.getElementById("myTrackTitle1").innerHTML=epicodusTracks[i].title;
    document.getElementById("myTrackDetails1").innerHTML=epicodusTracks[i].details;
    document.getElementById("myLink1").innerHTML=epicodusTracks[i].link;
  }
  else if (i === 1) {


    document.getElementById("myTrackTitle2").innerHTML=epicodusTracks[i].title;
    document.getElementById("myTrackDetails2").innerHTML=epicodusTracks[i].details;
    document.getElementById("myLink2").innerHTML=epicodusTracks[i].link;
  }

  else if (i === 2) {
    document.getElementById("myTrackTitle3").innerHTML=epicodusTracks[i].title;
    document.getElementById("myTrackDetails3").innerHTML=epicodusTracks[i].details;
    document.getElementById("myLink3").innerHTML=epicodusTracks[i].link;
  }

  else if (i === 3) {
    document.getElementById("myTrackTitle4").innerHTML=epicodusTracks[i].title;
    document.getElementById("myTrackDetails4").innerHTML=epicodusTracks[i].details;
    document.getElementById("myLink4").innerHTML=epicodusTracks[i].link;
  }
  else if (i === 4) {
    document.getElementById("myTrackTitle5").innerHTML=epicodusTracks[i].title;
    document.getElementById("myTrackDetails5").innerHTML=epicodusTracks[i].details;
    document.getElementById("myLink5").innerHTML=epicodusTracks[i].link;
  }
}



// $(function() {
//   $("h1").click(function() {
//     alert("This is a header.");
//   });
//
//   $(".clickable").click(function() {
//     $(".track-details").toggle();
//   });
//
//   for (var i = 0; i < epicodusTracks.length; i++) {
//     for (var e = 0; e < epicodusTracks.tracks[e].length; e++) {}
//     $(".track-entry").append(formattedEntries);
//     var formattedEntries =
//     $("h3 .clickable").append(epicodusTracks[i].title) +
//     $(".track-details p").append(epicodusTracks[i].details) +
//     $(".track-details").append(epicodusTracks[i].link);
//   }
// });


$(function() {
    $( "#myTitleButton" ).click(function() {
        $( "#myTrackDetails" ).toggle();
    });
});

$(function() {
    $( "#myFormButton" ).click(function() {
        $( "#myBlankForm" ).toggle();
    });
});


//$ can replace 'jQuery' as a shortcut, and you can remove the (document).ready, too

// jQuery(document).ready(function() {
//   jQuery("h1").click(function() {
//     alert("This is a header.");
//   });
// });

//
//
// // NOTE: FOLLOWING IS FROM the MATH PROJECT, HASN'T BEEN FORMATTED FOR STRING YET...actually I bet there's probably an easier way to do this...like num1.isAlpha()...check...
//
// var getInput = function() {
//   var getChoice = parseInt(prompt("Choose operation by index option. \n1. + \n2. - \n3. / \n4. * \n"));
//   var getNumber1 = parseInt(prompt("Enter first number:"));
//   var getNumber2 = parseInt(prompt("Enter second number: "));
//   return [getChoice, getNumber1, getNumber2];
// };
//
// var userInputArray = getInput();
// var userChoice = userInputArray[0];
// var num1= userInputArray[1];
// var num2= userInputArray[2];
// var lowRange = 1;
// var highRange = 4;
// var calculateNum = [
//   function (num1, num2) {return num1 + num2;},
//   function (num1, num2) {return num1 - num2;},
//   function (num1, num2) {return num1 / num2;},
//   function (num1, num2) {return num1 * num2;},
// ];
//

//
// // input allows for decimals (ie. 1.2 is accepted. Specify non-floating point? setPrecision funct?)
// // Should make it immediately check input and only store the int in the array if it's valid...return false immediately, so user doesn't have to go through the motions of finishing input if the first num is wrong
// function checkInput(userInputArray) {
//   for (var i = 0; i < userInputArray.length; i++) {
//     if (isNaN(userInputArray[i])) {
//       alert("user input of'" + userInputArray[i] + "[" + i + "]" + "' is NOT a NUMBER");
//       return false;
//     }
//     else if (i === 0) {
//       if (lowRange > userInputArray[i] || userInputArray[i] > highRange) {
//         alert("user input of ''" + userInputArray[i] + "' is not within options range of " + lowRange + " and " + highRange);
//         return false;
//       }
//     }
//     // alert("Each item in the array has been validated");
//     else if (i === (userInputArray.length - 1)) {
//       return true;
//     }
//   }
// }
//
// var cleanInput = checkInput(userInputArray);
//
// while (cleanInput === false) {
//   alert("invalid choice. TRY AGAIN!");
//
//   var userInputArray = getInput();
//   var num1= userInputArray[1];
//   var num2= userInputArray[2];
//   var userChoice = userInputArray[0];
//   var cleanInput = checkInput(userInputArray);
// }
// if(cleanInput === true) {
//   // alert("User input has been validated");
// }
// var calcSymb = ["+", "-", "/", "*"];
//
// var displayCalcOperation = function (num1, num2) {
//   var numValue;
//   alert(num1 + calcSymb[userChoice-1] + num2 + " = " + (numValue = calculateNum[userChoice-1](num1, num2)));
// };
//
// displayCalcOperation(num1, num2);
//
// $(function() {
//     $( "#button1" ).click(function() {
//         $( "#item1" ).toggle();
//     });
// });
//
// $(function() {
//     $( "#button2" ).click(function() {
//         $( "#item2" ).toggle();
//     });
// });
// $(function() {
//     $( "#button3" ).click(function() {
//         $( "#item3" ).toggle();
//     });
// });
