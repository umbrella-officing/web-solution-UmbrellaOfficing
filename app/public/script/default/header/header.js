const openInputsearchCoworkingSpaces = ()=> {

    const header = document.querySelector('#header')
    const search = document.querySelector('.container_search_input')
    const search_txt = document.querySelector('#search_txt')
    const container_informations_find_coworking = document.querySelector('#container_informations_find_coworking')
    const box_black = document.querySelector('#box_black')
    const type_office = document.querySelector('#type_office')

    search.addEventListener('click',(e)=>{
        header.classList.add('header_expanded')
        type_office.style.display = 'flex'
        search_txt.style.display = 'none'
        search.classList.add("expanded")
        container_informations_find_coworking.style.display = 'flex'
        box_black.style.display = 'block'
    })
    
    select_type_office()
    closeInputsearchCoworkingSpaces(box_black,header,search,search_txt,container_informations_find_coworking)
}

const select_type_office = () => {

    const optionsOffice = document.querySelectorAll('.option_office')
    optionsOffice.forEach(option=> option.addEventListener('click',checked))

    function checked(){  
        optionsOffice.forEach(option => option.classList.remove('checked'))
        this.classList.add('checked')
    }
}

const closeInputsearchCoworkingSpaces = (box_black,header,search,search_txt,container_informations_find_coworking)=> {

    box_black.addEventListener('click',()=>{
        header.classList.remove('header_expanded')
        type_office.style.display = 'none'
        box_black.style.display = 'none'
        search.classList.remove("expanded")
        search_txt.style.display = 'block'
        container_informations_find_coworking.style.display = 'none'
    })

    window.addEventListener('scroll',()=>{
        if(window.scrollY > 0){
            header.classList.remove('header_expanded')
            type_office.style.display = 'none'
            box_black.style.display = 'none'
            search.classList.remove("expanded")
            search_txt.style.display = 'block'
            container_informations_find_coworking.style.display = 'none'
            return
        }
        })
}

openInputsearchCoworkingSpaces()


const menuHamburguer  = () =>{
    const menu_sign_in_up = document.querySelector('#menu_sign-in-up')
    const menu_open = document.querySelector('.menu_open')

    window.addEventListener('click',(e)=>{

        if(menu_sign_in_up.contains(e.target) == true){
            menu_open.classList.toggle('menu_open_checked')
            return
        }

        if(menu_open.contains(e.target) == false){
            menu_open.classList.remove('menu_open_checked')
        }
    })
    
    popUp_login_signUp()
}

const popUp_login_signUp = () => {

    const optionsMenu = document.querySelectorAll('.popUp-login-signUp')
    const containerPopUp = document.querySelector('#container_popUp_login-signUp')
    const AllPopUp = document.querySelectorAll(".popUp")

    optionsMenu.forEach(option=>option.addEventListener('click',openPopUp))

    function openPopUp (){
        containerPopUp.style.display = 'flex'
        if(this == optionsMenu[0]){
            AllPopUp[0].classList.add('popUpChecked')
        }

        else{
            AllPopUp[1].classList.add('popUpChecked')
        }

        closePopUP()
    }

    function closePopUP() {
        container_popUp_delete.addEventListener('click',e=>{

        if(e.target.classList == 'close_popup' || e.target == containerPopUp){
        containerPopUp.style.display = 'none'
        AllPopUp.forEach(popUp => popUp.classList.remove('popUpChecked'))
        }

       })
    }

}

menuHamburguer ()
