const optionMenu = () => {
    const options_menu = document.querySelectorAll(".options_menu");
    options_menu.forEach(option => {
        option.addEventListener("click", checked) 
    });
    function checked() {
        options_menu.forEach(option => {
            option.classList.remove("option-checked")
        });
        this.classList.add("option-checked")
    };
};

optionMenu();

function bookingRequests(x){
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
    
    else {
        document.getElementById("pending-confirmation").style.display="none";
        document.getElementById("confirmed").style.display="none";
        document.getElementById("canceled").style.display="none";
        document.getElementById("client-avaliation").style.display="block";
    }
}

const openPopAvaliation = () => {
    const buttonAvaliation= document.querySelectorAll(".avaliation");
    const avaliationOwner = document.getElementById("container_popUp_avaliation-owner");

    buttonAvaliation.forEach(element=> {
        element.addEventListener('click', () => {
        avaliationOwner.style.display = 'flex'
    })
    })


    closePopAvaliation(avaliationOwner)
    
}

function closePopAvaliation(avaliationOwner) {
    avaliationOwner.addEventListener('click', e => {

        console.log(e.target)

        if (e.target == avaliationOwner) {
            avaliationOwner.style.display = 'none'
        }
    })
}

openPopAvaliation()