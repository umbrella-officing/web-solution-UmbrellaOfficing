function solicitations(x){
    if(x === 1){
        document.getElementById("pending-confirmation").style.display="block";
        document.getElementById("confirmed").style.display="none";
        document.getElementById("canceled").style.display="none";
        document.getElementById("client-avaliation").style.display="none";
    }

    else if(x === 2){
        document.getElementById("pending-confirmation").style.display="none";
        document.getElementById("confirmed").style.display="block";
        document.getElementById("canceled").style.display="none";
        document.getElementById("client-avaliation").style.display="none";
    }

    else if(x === 3){
        document.getElementById("pending-confirmation").style.display="none";
        document.getElementById("confirmed").style.display="none";
        document.getElementById("canceled").style.display="block";
        document.getElementById("client-avaliation").style.display="none";
    }

    else{
        document.getElementById("pending-confirmation").style.display="none";
        document.getElementById("confirmed").style.display="none";
        document.getElementById("canceled").style.display="none";
        document.getElementById("client-avaliation").style.display="block";  
    }
}
