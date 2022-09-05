// const rating = () => {

//     const classifications = document.querySelectorAll(".rating-level")

//     classifications.forEach((levelClassification, index, arr)=>{
//         levelClassification.addEventListener('click',()=>{
//             console.log(levelClassification)

//             const current_levelClassification = index + 1
//             const lengthLevel = arr.length

//             if(index == index){
//                 for (let i = 0; i <= index; i++) {
//                   arr[i].classList.add('checked_classification')
//                 }
//             }

//             if(current_levelClassification < lengthLevel){
//             for (let i = index+1; i < arr.length; i++) {
//                 arr[i].classList.remove('checked_classification')
//               }
//             }
            
//             if(index == index){
//                 for (let i = 0; i <= index; i++) {
//                   arr[i].classList.add('checked_classification')
                  
//                 }
//             }

//             // if(current_levelClassification < lengthLevel){
//             // for (let i = index+1; i < arr.length; i++) {
//             //     arr[i].classList.remove('checked_classification')
//             //   }
//             // }
//         })
//     })

// }

// rating()

const rating = () => {

  const listBars = document.querySelector('.rating')
  const bar = document.querySelectorAll(".rating-bar")

  bar.forEach((item, index, arr)=>{
      item.addEventListener('click',(e)=>{
        console.log(bar);
      
          const current_bar_level = index + 1
          const lengthBars= arr.length
          
          if(index == index){
              for (let i = 0; i <= index; i++) {
                arr[i].querySelectorAll('.rating-bar-active')
              }
          }

          if(current_bar_level < lengthBars){
          for (let i = index+1; i < lengthBars; i++) {
              arr[i].querySelectorAll('.rating-bar')
            }
          }

      })
  })

}

rating()