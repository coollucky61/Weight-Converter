function weightKgConverter(valNum) {
    document.getElementById("kilogramInput").value = valNum*0.453592;
    document.getElementById("ounceInput").value = valNum*16;
    document.getElementById("gramsInput").value = valNum*453.592;
    document.getElementById("stonesInput").value = valNum*0.0714286;

}

