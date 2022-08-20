// const openPopCancel = () => {
//     const buttonCancel = document.querySelectorAll(".cancel");
//     const container_popUp_cancel = document.getElementById("container_popUp_cancel");

//     buttonCancel.forEach(element=> {
//         element.addEventListener('click', () => {
//         container_popUp_cancel.style.display = 'flex'
//     })
//     })


//     closePopCancel(container_popUp_cancel)
    
// }

// openPopCancel();

// function closePopCancel(container_popUp_cancel) {
//     container_popUp_cancel.addEventListener('click', e => {

//         console.log(e.target)

//         if (e.target == container_popUp_cancel) {
//             container_popUp_cancel.style.display = 'none'
//         }
//     })
// }

// closePopCancel();

const switchContent = () => {
    const popUpCancel = document.querySelectorAll(".popUp_cancel form > div");

    console.log(popUpCancel);

    popUpCancel.forEach((content, index, arr)=>{
        content.addEventListener('click', () => {
            state(content, index, arr)
        })
    })

    function state(content, index, arr){
        console.log(arr)
         
        if(index == index){
            var teste = content.children
            var teste1 = teste[2].children[1]

            teste1.addEventListener('click', () => {
                console.log('teste')
                arr[index].style.display = 'none';
                arr[index++].style.display = 'block';

    
                // content[index++].style.display = 'block';

            })
            // console.log(teste)
            // console.log(teste1)
        }
        
    }
     
}

switchContent()

