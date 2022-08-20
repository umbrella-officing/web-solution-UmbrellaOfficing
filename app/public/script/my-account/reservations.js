
const openPopCancel = () => {
    const buttonCancel= document.querySelectorAll(".cancel");
    const container_popUp_cancel= document.getElementById("container_popUp_cancel");

    console.log({buttonCancel})

    buttonCancel.forEach(element=> {
        element.addEventListener('click', () => {
        container_popUp_cancel.style.display = 'flex'
    })
    })

}

openPopCancel();

const popCancel_state = () => {
    const buttonGo= document.querySelectorAll(".go");
    const popCancel_state1 = document.getElementById("popUp-cancel_state1");
    const popCancel_state3 = document.getElementById("popUp-cancel_state3");

    
    console.log(buttonGo[0])

    buttonGo.forEach((element,index)=> {
        element.addEventListener('click', () => {
        popCancel_state1.style.display = 'flex'

        console.log(index)
    })
    })

}

popCancel_state();

openPopCancel();