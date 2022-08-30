const rating = () => {

    const classifications = document.querySelectorAll(".rating")

    classifications.forEach((levelClassification, index, arr)=>{
        levelClassification.addEventListener('click',()=>{
            
            if(index == index){
                for (let i = 0; i <= index; i++) {
                  arr[i].classList.add('checked_classification')
                  
                }
            }

            // if(current_levelClassification < lengthLevel){
            // for (let i = index+1; i < arr.length; i++) {
            //     arr[i].classList.remove('checked_classification')
            //   }
            // }

        })
    })

}

rating()