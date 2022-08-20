const operationsValues = () =>{
    const specifications = document.querySelectorAll(".specification")

    specifications.forEach((specification,index)=>{
        specification.addEventListener('click',()=>{
            operations(specification,index)
        })
    })


        function operations(specification,index){

            if(index == index){
                var amountInput = specification.childNodes[3]
                console.log(amountInput.value++)


            }
        }

        // function operations(e){  
        //     if(e.target){
        //         var teste = this.childNodes[3]
        //         console.log(teste)
        //     }  
        // }

}

operationsValues()