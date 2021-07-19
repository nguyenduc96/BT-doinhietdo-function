function temperatureChange(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById('temperatureC').innerHTML = (valNum -32)/1.8;
}