fetch('https://goweather.herokuapp.com/weather/Bogota')
    .then(function (response) {return response.json();})
    .then(function (data) { 
        console.log("Esta es la temperatura = " + data.temperature)
        console.log("Esta es la velocidad del viento = " + data.wind)

        if (data.temperature <= 10) {
            console.log('la temperatura es FRIA = ' + data.temperature)
        } else 
        console.log('La temperatura es FRESCA = ' + data.temperature);
        if (data.temperature >= 26) {
            console.log('la temperatura es CALIENTE = ' + data.temperature)
        } else 
        return('');
        if (data.temperature >= 18) {
            console.log('la temperatura es CALIDA = ' + data.temperature)
        } else 
        return('')
    });