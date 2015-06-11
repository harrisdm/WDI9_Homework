


var weatherReport = function(parsed_json) {

  console.log(parsed_json);

  var current = parsed_json['current_observation'];

  var temp_c = current['temp_c'];
  var feels_temp_c = current['feelslike_c'];
  var weather = current['weather'];
  var weather_icon = current['icon_url'];

  var wind = current['wind_string'];
  var wind_dir = current['wind_dir'];
  var wind_speed = current['wind_kph'];
  var wind_gust = current['wind_gust_kph'];

  var humidity = current['relative_humidity'];
  var precip_1hr = current['precip_1hr_metric'];
  var precip_today = current['precip_today_metric'];

  var obsv_time = current['observation_time'];
  var obsv_loc = current['observation_location']['full'];

  $("#city").html(toTitleCase($("#location").val()));
  $("#weather-image").html("<img src="+weather_icon+">");
  $("#weather").html(weather);
  $("#temperature").html(temp_c+ "&deg;C");
  $("#feels-like").html("Feels like " + feels_temp_c + "&deg;C");

  $("#wind_dir").html(wind_dir);
  $("#wind_speed").html(wind_speed + " km/h");
  $("#wind_gust").html(wind_gust + " km/h");

  $("#humidity").html(humidity);
  $("#precip_1hr").html(precip_1hr + " ml");
  $("#precip_today").html(precip_today + " ml");

  $("#obsv_time").html(obsv_time);
  $("#obsv_loc").html(obsv_loc);


};

function toTitleCase(str)
{
  return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}




$(document).ready(function() {

  //$(".weather-container").hide();

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
      }).done(weatherReport).done(function(){
        $(".weather-container").slideDown();
      });

    });

  });

});




