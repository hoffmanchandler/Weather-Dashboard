$('.popCity').click(function (e) {
    var citySearch = $('.popCity').attr("id");
    console.log(citySearch);
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${citySearch}&appid=217731b2c4c4604614a6ee76ea8b8b9d`)
        // fetch is returning data that is not compatable with json so we will need to convert it
        .then((response) => response.json())
        // console.log data to make sure we return the right data
        .then((data) =>{ 
            console.log(data)
            var lat = data.coord.lat;
            var lon = data.coord.lon;
            console.log(lat);
            console.log(lon);
            fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=217731b2c4c4604614a6ee76ea8b8b9d&units=imperial`)
            .then((response) => response.json())
            .then((data) =>{ 
            var curTemp = data.list[0].main.temp;  
            console.log(curTemp);
            var curWind = data.list[0].wind.speed;
            console.log(curWind);
            var curHumidity = data.list[0].main.humidity;
            console.log(curHumidity);
            $(".curCity").append(citySearch);
            $(".curTemp").append(curTemp);
            $(".curWind").append(curWind);
            $(".curHumidity").append(curHumidity);
            // Returning 401 error. Asking for paid membership?
            fetch(`https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&cnt=4&appid=217731b2c4c4604614a6ee76ea8b8b9d&units=imperial`)
            .then((response) => response.json())
            .then((data) =>{ 
                console.log(data);
        });
})})

$('#searchBut').click(function (e) {
    var citySearch = $('#cityInput').val();
    console.log(citySearch);
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${citySearch}&appid=217731b2c4c4604614a6ee76ea8b8b9d`)
        // fetch is returning data that is not compatable with json so we will need to convert it
        .then((response) => response.json())
        // console.log data to make sure we return the right data
        .then((data) =>{ 
            //console.log(data)
            var lat = data.coord.lat;
            var lon = data.coord.lon;
            console.log(lat);
            console.log(lon);
            fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=217731b2c4c4604614a6ee76ea8b8b9d&units=imperial`)
            .then((response) => response.json())
            .then((data) =>{ 
            var curTemp = data.list[0].main.temp;
            console.log(curTemp);
            var curWind = data.list[0].wind.speed;
            console.log(curWind);
            var curHumidity = data.list[0].main.humidity;
            console.log(curHumidity);
            // Adding curTemp value to weather output
            $(".curCity").append(citySearch);
            $(".curTemp").append(curTemp);
            $(".curWind").append(curWind);
            $(".curHumidity").append(curHumidity);
            // Returning 401 error. Asking for paid membership?
            fetch(`https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&cnt=4&appid=217731b2c4c4604614a6ee76ea8b8b9d&units=imperial`)
            .then((response) => response.json())
            .then((data) =>{ 
                console.log(data);
        })});
})})})