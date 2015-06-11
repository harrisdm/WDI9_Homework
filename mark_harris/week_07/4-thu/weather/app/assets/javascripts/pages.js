


var weatherReport = function(parsed_json) {

  console.log(parsed_json);

  var current = parsed_json['current_observation'];

  var location = parsed_json['location']['city'];


  var temp_c = current['temp_c'];
  var feels_temp_c = current['feelslike_c'];
  var weather = current['weather'];
  var weather_icon = current['icon_url'];
  var obsv_time = current['observation_time'];
  var precip_1hr = current['precip_1hr_metric'];
  var precip_today = current['precip_today_metric'];
  var humidity = current['relative_humidity'];
  var wind_dir = current['wind_dir'];
  var wind_speed = current['wind_kph'];
  var wind_gust = current['wind_gust_kph'];
  var wind = current['wind_string'];

  //alert("Current temperature in " + location + " is: " + temp_c);

  var div = $("<div/>").html(temp_c).appendTo("#weather");
  var div = $("<div/>").html(feels_temp_c).appendTo("#weather");
  var div = $("<div/>").html(weather).appendTo("#weather");
  var div = $("<div/>").html(weather_icon).appendTo("#weather");
  var div = $("<div/>").html(obsv_time).appendTo("#weather");
  var div = $("<div/>").html(precip_1hr).appendTo("#weather");
  var div = $("<div/>").html(precip_today).appendTo("#weather");
  var div = $("<div/>").html(humidity).appendTo("#weather");
  var div = $("<div/>").html(wind_dir).appendTo("#weather");
  var div = $("<div/>").html(wind_speed).appendTo("#weather");
  var div = $("<div/>").html(wind_gust).appendTo("#weather");
  var div = $("<div/>").html(wind).appendTo("#weather");

};






$(document).ready(function() {

  $("#search").on("click", function(event) {
    event.preventDefault();

    var address = $("#location").val();
    var geocoder = new google.maps.Geocoder();

    geocoder.geocode({ "address": address}, function(results, status){
      var location = results[0].geometry.location;
      //console.log(location.lat() + " " + location.lng());
      
      var url = "http://api.wunderground.com/api/40e106eebaa2f3d4/geolookup/conditions/q/"+location.lat()+","+location.lng()+".json";
      //console.log(url);

      $.ajax({
        url : url,
        dataType : "jsonp"
      }).done(weatherReport);

    });

  });

});




