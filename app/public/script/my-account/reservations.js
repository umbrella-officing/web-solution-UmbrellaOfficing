
const openPopCancel = () => {
    const buttonCancel= document.querySelectorAll(".cancel");
    const container_popUp_cancel= document.getElementById("container_popUp_cancel");
    const popUp_flex = document.querySelectorAll('.popUp_cancel form > div')
    console.log(popUp_flex)

    console.log({buttonCancel})

    buttonGo.forEach((buttonGo,index)=>{
        buttonGo.addEventListener('click',()=>{
            states(buttonGo,index)
        })
    })

    function states(buttonGo,index){

            if(index == index){
                var buttonGo = buttonGo.childNodes[1]
                state2.style.display = 'flex'

        

                console.log(button1.value++)

            }
        }
}
openPopCancel()
