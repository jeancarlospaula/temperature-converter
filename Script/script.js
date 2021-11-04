
function checkTemperatureType(){
if(temperatureSelect.value == "c"){
    buttonConversor.textContent = "Converter para Farenheit"
} else if(temperatureSelect.value == "f") {
    buttonConversor.textContent = "Converter para Celsius"
}
}