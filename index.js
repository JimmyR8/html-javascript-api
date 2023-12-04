//Objetivo: Leer el API de Rick and Morty y mostrar la imagen.

var idPersonaje = Math.floor(Math.random () * 826)
//Conectarse a la API desde la URL.
fetch('https://rickandmortyapi.com/api/character/'+idPersonaje)
//Despues de conectarse mandame la informacion en JSON
    .then(function (response) {return response.json();})
//Despues muestrame la informacion (toda la informacion o la informacion especificada) en la consola (console.log)
    .then(function (data) { 
        console.log("Esta es URL de la imagen de la API que consultastes " + data.image)
        console.log("Este es el nombre del personaje de la API que consultastes " + data.name)
    });