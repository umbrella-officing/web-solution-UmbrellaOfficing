
const openPopCancel = () => {
    const buttonCancel= document.querySelectorAll(".cancel");
    const container_popUp_cancel= document.getElementById("container_popUp_cancel");

    console.log({buttonCancel})

    buttonCancel.forEach((element,index)=> {
        element.addEventListener('click', () => {
        container_popUp_cancel.style.display = 'flex'
        console.log(index)
    })
    })
}
openPopCancel()
