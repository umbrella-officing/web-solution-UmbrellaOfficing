const firstPicture = document.querySelector('#photo1');
const renderElement = document.querySelector('.renderElement');
const areaTxt = 'Adicionar foto +';
const advance = document.getElementById("#advanceButton");
// renderElement.innerHTML = areaTxt;

firstPicture.addEventListener('change', function(e){
    const pictureTarget = e.target;
    const file = pictureTarget.files[0];

    if(file){
        const reader = new FileReader();
        reader.addEventListener('load', function(e){
            const thisReader = e.target;

            const img = document.createElement('img');
            img.src = thisReader.result;
            img.classList.add('pictureImg');

            renderElement.appendChild(img)

            advance.style.background = "var(scale-2-purple)";
        })
        reader.readAsDataURL(file)
    } 
    
    else{
        renderElement.innerHTML = areaTxt;
    }
})

// const secondPicture = document.querySelector('#photo2');
// const renderElement = document.querySelector('.renderElement');
// renderElement.innerHTML = areaTxt;

// secondPicture.addEventListener('change', function(e){
//     const pictureTarget = e.target;
//     const file = pictureTarget.files[0];

//     if(file){
//         const reader = new FileReader();
//         reader.addEventListener('load', function(e){
//             const thisReader = e.target;

//             const img = document.createElement('img');
//             img.src = thisReader.result;
//             img.classList.add('pictureImg');

//             renderElement.appendChild(img)
//         })
//         reader.readAsDataURL(file)
//     } 
    
//     else{
//         renderElement.innerHTML = areaTxt;
//     }
// })