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
                arr[i].classList.add('rating-bar-active')
              }
          }

          if(current_bar_level < lengthBars){
          for (let i = index+1; i < lengthBars; i++) {
              arr[i].classList.remove('rating-bar-active')
            }
          }

      })
  })

}

rating()