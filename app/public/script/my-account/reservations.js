
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

openPopCancel();


const popCancel_states = () =>{
    const buttonGo = document.querySelectorAll(".go");
    const state2 = document.getElementById("popUp-cancel_state2");
    const state3 = document.getElementById("popUp-cancel_state3");


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

popCancel_states()

// const popCancel_state = () => {
//     const buttonGo= document.querySelectorAll(".go");
//     const popCancel_state1 = document.getElementById("popUp-cancel_state1");
//     const popCancel_state3 = document.getElementById("popUp-cancel_state3");

    
//     console.log(buttonGo[0])

//     buttonGo.forEach((element,index)=> {
//         element.addEventListener('click', () => {
//         popCancel_state1.style.display = 'flex'

//         console.log(index)
//     })
//     })

// }

// popCancel_state();
