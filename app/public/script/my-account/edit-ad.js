function incrementValue(valueMax) {
    var value = parseInt(document.getElementById('result').value, 10);
    value = isNaN(value) ? 0 : value;
    if (value >= valueMax) {
        value = valueMax;
    } else {
        value++;
    }
    document.getElementById('result').value = value;
}

function decrementValue(valueMin) {
    var value = parseInt(document.getElementById('result').value, 10);
    value = isNaN(value) ? 0 : value;
    if (value <= valueMin) {
        value = 0;
    } else {
        value--;
    }
    document.getElementById('result').value = value;
}