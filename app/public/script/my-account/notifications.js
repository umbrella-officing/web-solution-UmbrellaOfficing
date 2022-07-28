function teste(){
    window.alert("Olá");
}

function notifications(x){
    if (x === 1){
        document.getElementById("last-notifications").style.display("block");
        document.getElementById("unread-notifications").style.display("none");
        document.getElementById("read-notifications").style.display("none");
    }

    else if(x === 2){
        document.getElementById("unread-notifications").style.display("block");
        document.getElementById("last-notifications").style.display("none");
        document.getElementById("read-notifications").style.display("none");
    }

    else{
        document.getElementById("read-notifications").style.display("block");
        document.getElementById("unread-notifications").style.display("none");
        document.getElementById("last-notifications").style.display("none");
    }
}
