function convert() {
    var temperature = parseFloat(document.getElementById("temperature").value);
    var unit = document.getElementById("unit").value;
    var resultElement = document.getElementById("result");

    if (isNaN(temperature)) {
        resultElement.textContent = "Please enter a valid number";
        return;
    }

    var convertedTemperature;
    var unitText;

    if (unit === "celsius") {
        convertedTemperature = (temperature * 9 / 5) + 32;
        unitText = "Fahrenheit";
    } else if (unit === "fahrenheit") {
        convertedTemperature = (temperature - 32) * 5 / 9;
        unitText = "Celsius";
    } else if (unit === "kelvin") {
        convertedTemperature = temperature + 273.15;
        unitText = "Kelvin";
    }

    resultElement.textContent = "Converted temperature: " + convertedTemperature.toFixed(2) + " " + unitText;
}