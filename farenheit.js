/* En funktion som tar ett heltal i form av grader i Celsius (°C) som argument och omvandlar och returnerar antal grader i Farenheit (°F).*/
"use strict";

function convertToFarenheit(celsius) {
    let farenheit = (celsius * 1.8) + 32; // formel celsius till farenheit

    return farenheit;
}

let convertCelsius = 30
let convertedFarenheit = convertToFarenheit(convertCelsius); // spara värde i variabel

console.log(`${convertCelsius}°C är ${convertedFarenheit}°F`); //utskrift