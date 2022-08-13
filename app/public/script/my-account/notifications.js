function notificacoes(x){
    if(x === 1){
        document.getElementById("last-notifications").style.display="block";
        document.getElementById("unread-notifications").style.display="none";
        document.getElementById("read-notifications").style.display="none";
    }

    else if(x === 2){
        document.getElementById("last-notifications").style.display="none";
        document.getElementById("unread-notifications").style.display="block";
        document.getElementById("read-notifications").style.display="none";
    }

    else{
        document.getElementById("last-notifications").style.display="none";
        document.getElementById("unread-notifications").style.display="none";
        document.getElementById("read-notifications").style.display="block";
    }
}
