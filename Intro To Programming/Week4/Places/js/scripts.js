// NOTE: BACKEND


//make an object that has properties and METHODS in keypairs (ie: var dog = { name: "sparky", speak: function(){console.log("Woof!");}})

//constructor
function Location(location, landmark, month, notes){
  this.location = location;
  this.landmark = landmark;
  this.month = month;
  this.notes = notes;
}
//prototype




// NOTE: FRONTEND

$(document).ready(function(){
  $("form#userInput").submit(function(event){
    event.preventDefault();
    var location = $("input#newPlaceName").val();
    var landmark = $("input#newLandmarkName").val();
    var month = $("input#newMonthName").val();
    var notes = $("input#newNotesName").val();

    var newLocation = new Location(location, landmark, month, notes);
  });
});
