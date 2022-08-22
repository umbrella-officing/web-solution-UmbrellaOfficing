// function notificacoes(x){
//     if(x === 1){
//         document.getElementById("last-notifications").style.display="block";
//         document.getElementById("unread-notifications").style.display="none";
//         document.getElementById("read-notifications").style.display="none";
//     }

//     else if(x === 2){
//         document.getElementById("last-notifications").style.display="none";
//         document.getElementById("unread-notifications").style.display="block";
//         document.getElementById("read-notifications").style.display="none";
//     }

//     else{
//         document.getElementById("last-notifications").style.display="none";
//         document.getElementById("unread-notifications").style.display="none";
//         document.getElementById("read-notifications").style.display="block";
//     }
// }

function notifications() {
    const lastNotifications = document.getElementById("last-notifications");
    const unreadNotifications = document.getElementById("unread-notifications");
    const readNotifications = document.querySelectorAll('read-notifications');
    const optionsNotifications= document.querySelectorAll('.options-notifications')


    optionsNotifications.forEach(option=>{
        option.addEventListener('click',active)
    })

    function active(){
        if(this == optionsNotifications[0]){
            optionsNotifications[1].classList.remove('option-active')
            this.classList.add('active')
            lastNotifications  = "block";
            unreadNotifications = "none";
            readNotifications = "none";
            return
        }

        else if(this == optionsNotifications[1]) {
            optionsNotifications[0].classList.remove('active')
            this.classList.add('active')
            lastNotifications  = "none";
            unreadNotifications = "block";
            readNotifications = "none";
            return
        }

        optionsNotifications[0].classList.remove('active')
        this.classList.add('active')
        lastNotifications  = "none";
        unreadNotifications = "none";
        readNotifications = "block";
    }
}