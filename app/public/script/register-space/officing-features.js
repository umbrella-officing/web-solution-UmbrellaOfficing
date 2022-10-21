// const operationsValues = () =>{
    
//     const specifications = document.querySelectorAll(".specification")
//     specifications.forEach((specification,index)=>{
//         specification.addEventListener('click',(e)=>{
//             if(e.target.classList == "subtract"){
//                 subtractionInput(specification,index)
//             }
//             if(e.target.classList == "addition"){
//                 additionInput(specification,index)
//             }
//         })
//     })
//         function subtractionInput(specification,index){
//             if(index == index){
//                 var amountInput = specification.children[1]
//                 var i = amountInput.value
//                 if (i > 0) {
//                     i--
//                     amountInput.setAttribute('value', i)
//                 }
//             }
//         }
//         function additionInput(specification,index){
//             if(index == index){
//                 var amountInput = specification.children[1]
//                 var i = amountInput.value
//                 i++
//                 amountInput.setAttribute('value', i)
//             }
//         }

//  console.log(specification);
// }

// operationsValues();

const switchContent = () => {
    const popUpCancel = document.querySelectorAll(".step");


    console.log(popUpCancel);
        console.log(e.target);

    popUpCancel.forEach((content, index, arr)=>{
    content.addEventListener('click', (e) => {
    if(e.target.classList == 'advanceButton'){
        console.log(e.target);
    nextContent(index, arr)
   
    }
    

    
    // if(e.target.className == ''){
    // previousContent(index, arr)
    // }
    })
    })
    
    
    function nextContent(index, arr){
    var lengthArray = arr.length-=1
    
    if(index == index && index < lengthArray){
    console.log(arr)
    const teste = index*-1
    console.log(teste)
    var i = index
    arr[i].style.display = 'none'
    arr[i+=1].style.display = 'flex'
    }
    }
    
    function previousContent(index, arr){
    if(index == index){
    var i = index
    arr[i].style.display = 'none'
    arr[i-=1].style.display = 'flex'
    }
    }
    
    }
    
    switchContent()