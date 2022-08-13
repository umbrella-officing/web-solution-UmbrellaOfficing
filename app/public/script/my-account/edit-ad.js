function spacedown(p){
    var e = document.getElementsByClassName('change_space')[0];
    var d = ['block', 'none'];

    e.style.display = d[p];

    var t = ['0px', '0px,-10px'];
    setTimeout(function(){
        e.style.transform = 'translate('+t[p]+')';
    },0);
}

function option(o) {
    var item = document.getElementById('space-'+o).innerHTML;
    document.getElementsByTagName('input')[0].value = item
}

function type_environment(p){
    var e = document.getElementsByClassName('typeEnvironment')[0];
    var d = ['block', 'none'];

    e.style.display = d[p];

    var t = ['0px', '0px,-10px'];
    setTimeout(function(){
        e.style.transform = 'translate('+t[p]+')';
    },0);
}

function category(y) {
    var item = document.getElementById('type-'+y).innerHTML;
    document.getElementsByTagName('input')[0].value = item
}


$(document).ready(function () {
    $("#cep_ad").mask("00.000-000");
    $("#price").mask("R$: 0,00");
});

// function incrementValue(valueMax) {
//     var value = parseInt(document.getElementById('result', 'result1', 'result2', 'result3', 'result4', 'result5').value, 10);
//     value = isNaN(value) ? 0 : value;
//     if (value >= valueMax) {
//         value = valueMax;
//     } else {
//         value++;
//     }
//     document.getElementById('result', 'result1', 'result2', 'result3', 'result4', 'result5').value = value;
// }

// function decrementValue(valueMin) {
//     var value = parseInt(document.getElementById('result', 'result1', 'result2', 'result3', 'result4', 'result5').value, 10);
//     value = isNaN(value) ? 0 : value;
//     if (value <= valueMin) {
//         value = 0;
//     } else {
//         value--;
//     }
//     document.getElementById('result', 'result1', 'result2', 'result3', 'result4', 'result5').value = value;
// }