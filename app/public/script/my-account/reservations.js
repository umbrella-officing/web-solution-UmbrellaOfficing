const switchContent = () => {
    const popUpCancel = document.querySelectorAll(".popUp_cancel form > div");

    console.log(popUpCancel);

    popUpCancel.forEach((content, index)=>{
        content.addEventListener('click', () => {
            state(content, index)
        })
    })

    function state(content, index){
        console.log(content, index)
         
        if(index == index){
            var teste = content.childNodes[6].parentElement[1]
            console.log(teste)
        }
        
    }
     
}

switchContent()

