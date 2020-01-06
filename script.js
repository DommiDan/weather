$(document).ready(function(){
      
    $("#getForcast").click(function(){
              
              var city = $("#city").val();
              var key  = '32bfd16c31d1937bf0996fcd67fb43dd';
          
          $.ajax({
            url:'http://api.openweathermap.org/data/2.5/weather',
            dataType:'json',
            type:'GET',
            data:{q:city, appid: key, units: 'imperial'},

            success: function(data){
              var weatherforcast = '';
              $.each(data.weather, function(index, val){

                weatherforcast = '<p><b>' + data.name + "</b><img src="+ data.weather.icon + ".png></p> Temperature: "+ data.main.temp + '&deg;F ' + 
                ' | ' + val.main + ", " + val.description + " | Humidity: " + data.main.humidity + " | WindSpeed: " + data.wind.speed + " % "

              });
            
             $("#showForcast").html(weatherforcast);
            }

          })

    });
  });