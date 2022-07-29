function hint(x){
    if (x === 1){
        document.getElementById("hint-adaptable").style.display="flex";
    }
    else if (x === 2){
        document.getElementById("hint-corporate").style.display="flex";
    }
    else if (x === 3){
        document.getElementById("hint-adaptable").style.display="none";
    }
    else{
        document.getElementById("hint-corporate").style.display="none";
    }
}