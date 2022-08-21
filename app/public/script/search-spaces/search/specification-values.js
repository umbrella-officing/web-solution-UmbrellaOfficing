const operationsValues = () =>{
    const specifications = document.querySelectorAll(".specification")

    specifications.forEach((specification,index)=>{
        specification.addEventListener('click',()=>{
            operations(specification,index)
        })
    })


        function operations(specification,index){

            if(index == index){
                var amountInput = specification.childNodes[index++]
                console.log(index)

                console.log(amountInput)

            }
        }

}

operationsValues()