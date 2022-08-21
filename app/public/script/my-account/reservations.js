const openPopCancel = () => {
    const buttonCancel = document.querySelectorAll(".cancel");
    const container_popUp_cancel = document.getElementById("container_popUp_cancel");

    buttonCancel.forEach(element=> {
        element.addEventListener('click', () => {
        container_popUp_cancel.style.display = 'flex'
    })
    })


    closePopCancel(container_popUp_cancel)
    
}

function closePopCancel(container_popUp_cancel) {
    container_popUp_cancel.addEventListener('click', e => {

        console.log(e.target)

        if (e.target == container_popUp_cancel) {
            container_popUp_cancel.style.display = 'none'
        }
    })
}

openPopCancel();

const switchContent = () => {
    const popUpCancel = document.querySelectorAll(".popUp_cancel > div > div");

    popUpCancel.forEach((content, index, arr)=>{
        content.addEventListener('click', (e) => {
            if(e.target.name == 'next'){
                nextContent(index, arr)
            }

            if(e.target.className == 'fa-solid fa-circle-chevron-left arrow-left'){
                previousContent(index, arr)
            }

        })
    })

    function nextContent(index, arr){
        var lengthArray = arr.length-=1

                if(index == index && index < lengthArray){
                        var i = index
                        arr[i].style.display = 'none'
                        arr[i+=1].style.display = 'block'
                }
    }

    function previousContent(index, arr){
                if(index == index){
                        var i = index
                        arr[i].style.display = 'none'
                        arr[i-=1].style.display = 'block'
                }
    }
     
}

switchContent()