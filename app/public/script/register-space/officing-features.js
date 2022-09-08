const operationsValues = () => {
    const form = document.querySelector('[data-js="form"]')

    form.addEventListener('submit', (e) => {
        e.preventDefault()
    })

    const specifications = document.querySelectorAll(".specification")

    specifications.forEach((specification, index) => {
        specification.addEventListener('click', (e) => {
            if (e.target.classList == "fa-solid fa-minus subtract") {
                subtractionInput(specification, index)
            }

            if (e.target.classList == "fa-solid fa-plus addition") {
                additionInput(specification, index)
            }
        })
    })


    function subtractionInput(specification, index) {

        if (index == index) {
            var amountInput = specification.children[1]
            var i = amountInput.value

            if (i > 0) {
                i--
                amountInput.setAttribute('value', i)
            }
        }
    }

    function additionInput(specification, index) {

        if (index == index) {
            var amountInput = specification.children[1]
            var i = amountInput.value
            i++
            amountInput.setAttribute('value', i)
        }
    }

}

operationsValues()

const officingFeatures = () => {
    const formSteps = document.querySelectorAll("form > div");

    formSteps.forEach((content, index, arr)=>{
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

officingFeatures()