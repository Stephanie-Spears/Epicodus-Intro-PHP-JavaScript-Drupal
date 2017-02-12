// NOTE: ARRAY of objects









$(document).ready(function() {
  $("#quizButton").click(function(){
    $("#showForm").show();
  });


  $("form").submit(function(event) {
    event.preventDefault();

  });
});
// $("#clearFormButton").click(function(){
//
//   $("span .contact").removeClass();
//
//     $(".contact").remove();
//
//     $(".firstName").remove();
//     $(".lastName").remove();
//     $(".address").remove();
//     $(".email").remove();
//     $(".note").remove();
// });
// });




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
