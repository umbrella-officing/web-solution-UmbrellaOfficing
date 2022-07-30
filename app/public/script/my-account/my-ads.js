function ads(x){
    if(x === 1){
        document.getElementById("actives_space").style.display="block";
        document.getElementById("inactives_space").style.display="none";
    }

    else if(x === 2){
        document.getElementById("actives_space").style.display="none";
        document.getElementById("inactives_space").style.display="block";
    }
}