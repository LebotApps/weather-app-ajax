// API CODE afdbbad862024298ca4f6eada7e55c50


let returnedData;

let $inputText;
const $returnedLocation = $('#returnedLocation');
const $returnedWeather = $('#returnedWeather');
const $returnedFeelsLike = $("#returnedFeelsLike");
const $returnedTemperature = $('#returnedTemperature');




function handleGetData(event) {
    event.preventDefault();

    inputText = $("#searchForm").val();
    //alert(inputText);

$.ajax({


    url: `https://api.openweathermap.org/data/2.5/weather?q=${inputText}&appid=9e2e79e449de63b165683ac1fcb83225&units=imperial`,
})





.then(
    function (data) {
      returnedData = data;

      $returnedLocation.text(returnedData["name"]);
      $returnedFeelsLike.text(returnedData["main"]["feels_like"]);
      //alert(returnedData["main"]["feels_like"]);

    $returnedTemperature.text(data["main"]["temp"]);

    $returnedWeather.text(returnedData["weather"][0]["description"]);

    
    
    },
    function (error) {
      console.log("bad request: ", error);
    }
  );
}

$("form").on('submit', handleGetData);