
function checkTemperatureType(){
if(temperatureSelect.value == "c"){
    buttonConversor.textContent = "Converter para Farenheit"
} else if(temperatureSelect.value == "f") {
    buttonConversor.textContent = "Converter para Celsius"
}
}

function calcularTemperatura() {

    let temperature = Number(firstTemperature.value)

    if(temperatureSelect.value == "c"){
        let Farenheit = temperature * 1.8 + 32
        resultConversor.value = Farenheit
    } else if(temperatureSelect.value == "f") {
        let Celsius = (temperature - 32)/1.8
        resultConversor.value = Celsius
    }
}

buttonConversor.addEventListener("click", calcularTemperatura)

function calcularTemperatura() {

    let temperature = Number(firstTemperature.value)

    if(temperatureSelect.value == "c"){
        let Farenheit = temperature * 1.8 + 32
        resultConversor.value = Farenheit.toFixed(2)
    } else if(temperatureSelect.value == "f") {
        let Celsius = (temperature - 32)/1.8
        resultConversor.value = Celsius.toFixed(2)
    }
}