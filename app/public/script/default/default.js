const search = document.querySelector('.container_search')

const openInputsearchCoworkingSpaces = ()=> {

    const search_txt = document.querySelector('#search_txt')
    const container_informations_find_coworking = document.querySelector('#container_informations_find_coworking')
    const box_black = document.querySelector('#box_black')

    search.addEventListener('click',(e)=>{
        search_txt.style.display = 'none'
        search.classList.add("expanded")
        container_informations_find_coworking.style.display = 'flex'
        box_black.style.display = 'block'
    })

    box_black.addEventListener('click',()=>{
        box_black.style.display = 'none'
        search.classList.remove("expanded")
        search_txt.style.display = 'block'
        container_informations_find_coworking.style.display = 'none'
    })

}

openInputsearchCoworkingSpaces()