$(document).ready(function() {

    $('#getForcast').click(function() {
        
        var city = $("#city").val();

        if(city != ''){

            $.ajax({

                url: "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial" 
                + "&appid=b6907d289e10d714a6e88b30761fae22",

                type: "GET",

                dataType: "jsonp",

                success: function(data){
                    console.log(data)
                }

            })



        }else {
            $("#error").html('can not be empty')
        }
    });

  });