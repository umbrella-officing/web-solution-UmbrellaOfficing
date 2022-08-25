const openPopUp = () =>{
    const openList = document.querySelector("#openList")
    const container = document.querySelector('#additional-specifications')

    openList.addEventListener('click',()=>{
        container.style.display = 'flex'
    })

    close_popup(container)

}

const close_popup = (container)=> {
    container.addEventListener('click',(e)=>{
        if(e.target.id == 'close_popUp' || e.target == container)
        container.style.display = 'none'
    })
}

const additionalSpecifications = ()=>{

    const listSpecifications = document.querySelector('#list-add-specifications')
    
    const list = [{nameEng:'Computer',name:'Computadores', img:'images/search-spaces/search/computer.svg', value:2},
                  {nameEng:'Sockets', name:'Tomadas', img:'images/search-spaces/search/sockets.svg', value:5}  
                ]
                
   const createList = list.forEach(item=>{

        listSpecifications.innerHTML += ` 

        <li class="specifications">
            <div>
                <img src="${item.img}" alt="${item.name}">
            </div>
                <label for="${item.nameEng}">${item.name}</label>
                <div class="specification">
                    <button>
                        <img class="subtract" src="images/search-spaces/search/subtract.png" alt="subtrair">
                    </button> 
                    <input type="number" min="0" value="${item.value}" name="${item.nameEng}" disabled>
                    <button>
                        <img class="addition" src="images//search-spaces/search/button-add.png"
                        name="addition" alt="adicionar">
                    </button>
                </div>
        </li>
         `
    })

}


const operationsValues = () =>{
    const specifications = document.querySelectorAll(".specification")

    specifications.forEach((specification,index)=>{
        specification.addEventListener('click',(e)=>{
            if(e.target.classList == "subtract"){
                subtractionInput(specification,index)
            }

            if(e.target.classList == "addition"){
                additionInput(specification,index)
            }
        })
    })


        function subtractionInput(specification,index){

            if(index == index){
                var amountInput = specification.children[1]
                var i = amountInput.value

                if (i > 0) {
                    i--
                    amountInput.setAttribute('value', i)
                }
            }
        }

        function additionInput(specification,index){

            if(index == index){
                var amountInput = specification.children[1]
                var i = amountInput.value
                i++
                amountInput.setAttribute('value', i)
            }
        }
        
}

openPopUp()
additionalSpecifications()
operationsValues()