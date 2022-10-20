var button = document.getElementById("advance");

const selectTypeOF = () => {
    const optionsOffice = document.querySelectorAll('.space-box')
    optionsOffice.forEach((option, index, arr) => option.addEventListener('click',()=>{

        if(index == 0 || index == 1 || index == 2){
            button.setAttribute('href','/caracteristicas-do-espaco')
        }

        for(let i = 0; i < arr.length; i++){
            arr[i].classList.remove('border-select')
        }

        arr[index].classList.add('border-select')
        button.firstElementChild.style.background = "var(--scale-2-purple)";
     
    }))

    // function checked(){  
    //     optionsOffice.forEach(option => option.classList.remove('border-select'));
    //     this.classList.add('border-select');
    // }
}

selectTypeOF();
