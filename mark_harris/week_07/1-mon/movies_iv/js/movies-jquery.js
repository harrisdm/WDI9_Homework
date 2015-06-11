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

  $("#film-list").hide();
  $("#film-data").show();
};

var display_list = function(info) {
  $("#film-list").html("");
  for(var i=0; i<info.Search.length; i++) {
    $("#film-list").append("<li><a href='' class='film-link' data-imdb='"+info.Search[i].imdbID+"'>"+info.Search[i].Title+"</a></li>");
  }
  $("#film-data").hide();
  $("#film-list-container").show();
};


var decide_action = function(info) {
  console.log(info);
  if(!info.Search) {
    alert("Film not found");
  }
  else {
    if(info.Search.length === 1) {
      $.ajax({
        url: "http://omdbapi.com?i="+info.Search[0].imdbID,
      }).done(display_film);
    } 
    else {
      display_list(info); 
    }
  }
}

$(document).ready(function() {

  $("#film-data").hide();
  $("#film-list-container").hide();

  $("form").on("submit", function(event) {

    event.preventDefault(); // Don't submit this form, JS will handle it  

    var searchTerm = $("#search").val();
    var url = "http://omdbapi.com?s="+searchTerm;

    $.ajax({
      url: url,
    }).done(decide_action);

  });

  // Trying to ajax the film list links
  $(".film-link").on("click", function(event) {

    event.preventDefault(); // Don't submit this form, JS will handle it  

    var searchTerm = $(this).data("imdb");
    var url = "http://omdbapi.com?i="+searchTerm;
    console.log(url);

    $.ajax({
      url: url,
    }).done(display_film);

  });
})
