/*Pop-up - Visualizar fotos*/
const openPopUp_seePictures = () => {
    const buttonSee = document.querySelectorAll(".footer");
    console.log(buttonSee)
    const containerPopUp_seePictures = document.getElementById("container_popUp-seePictures"); 

    buttonSee.forEach(element=> {
        element.addEventListener('click', () => {
        containerPopUp_seePictures.style.display = 'flex'
    })
    })


    closePopUp_seePictures(containerPopUp_seePictures)
    
}

function closePopUp_seePictures(containerPopUp_seePictures) {
    containerPopUp_seePictures.addEventListener('click',  p => { 

        if (p.target.id == 'seePictures-close' || c.target == containerPopUp_seePictures) {
            containerPopUp_seePictures.style.display = 'none'
        }
    })
}

openPopUp_seePictures()
