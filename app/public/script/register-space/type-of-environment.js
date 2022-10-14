 function hint(x){
     if (x === 1){
         document.getElementById("hint-adaptable").style.display="flex";
     }
     else if (x === 2){
         document.getElementById("hint-corporate").style.display="flex";
     }
     else if (x === 3){
         document.getElementById("hint-adaptable").style.display="none";
     }
     else{
         document.getElementById("hint-corporate").style.display="none";
     }
 }


// function openHint(){
//     const button = document.query.SelectorAll(".hint")
    
// }

// function closeHint(){
//     const hintIcon = document.()
// }
var corporate = document.getElementById("corporate");

var place = document.querySelectorAll(".space-box");



// spacebox.forEach(element, index => {
    
// });


//  place.forEach((element, index, arr)=>{
//      element.addEventListener('click',()=>{
//         arr[index].classList.add("borda");
       
//      })
//  })


const selectTypeOF = () => {

    const optionsOffice = document.querySelectorAll('.space-box')
    optionsOffice.forEach(option => option.addEventListener('click',checked))

    function checked(){  
        optionsOffice.forEach(option => option.classList.remove('border-select'));
        this.classList.add('border-select');
    }
}

selectTypeOF();


var button = document.getElementById("avancar");
    button.href = "/categorias-de-espacos-adaptaveis";
