
var display_film = function(info) {
  $("#poster").html("<img src='"+info.Poster+"'>");
  $("#title").html('<span class="title" >'+info.Title+'</span> ('+info.Year+')');
  $("#rated").html(info.Rated);
  $("#runtime").html(info.Runtime);
  $("#genre").html(info.Genre);
  $("#released").html(info.Released);
  $("#plot").html(info.Plot);
  $("#director").html('<strong>Director:</strong> '+info.Director);
  $("#stars").html('<strong>Stars:</strong> '+info.Actors);
  $("#film-data").show();
};


$(document).ready(function() {

  $("#film-data").hide();

  $("form").on("submit", function(event) {

    event.preventDefault(); // Don't submit this form, JS will handle it

    // Your code here...

    var searchTerm = $("#search").val();
    var url = "http://omdbapi.com?t="+searchTerm;
    console.log(searchTerm);
    console.log(url);

    var request = new XMLHttpRequest();
    request.open("GET", url);
    

    request.onreadystatechange = function() {
      if (request.readyState === 4) {
        console.log(request.responseText);
        var info = JSON.parse(request.responseText);
        console.log(info);
        console.log(info.Title);

        display_film(info);

      }
    }

    request.send();

  });

})
