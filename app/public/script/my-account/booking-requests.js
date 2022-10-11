/*Solicitações de reservas - Opções*/
const optionMenu = () => {
    const options_menu = document.querySelectorAll(".options_menu");
    options_menu.forEach(option => {
        option.addEventListener("click", checked) 
    });
    function checked() {
        options_menu.forEach(option => {
            option.classList.remove("option-checked")
        });
        this.classList.add("option-checked")
    };
};

optionMenu();

function bookingRequests(x){
    if(x === 1){
        document.getElementById("pending-confirmation").style.display="block";
        document.getElementById("confirmed").style.display="none";
        document.getElementById("canceled").style.display="none";
        document.getElementById("client-avaliation").style.display="none";
    }

    else if(x === 2){
        document.getElementById("pending-confirmation").style.display="none";
        document.getElementById("confirmed").style.display="block";
        document.getElementById("canceled").style.display="none";
        document.getElementById("client-avaliation").style.display="none";
    }
   
    else if(x === 3){
        document.getElementById("pending-confirmation").style.display="none";
        document.getElementById("confirmed").style.display="none";
        document.getElementById("canceled").style.display="block";
        document.getElementById("client-avaliation").style.display="none";
    }
    
    else {
        document.getElementById("pending-confirmation").style.display="none";
        document.getElementById("confirmed").style.display="none";
        document.getElementById("canceled").style.display="none";
        document.getElementById("client-avaliation").style.display="block";
    }
}

/*Pop-up: Consultar datas*/
const openPopUp_viewDate = () => {
    const buttonViewDates = document.querySelectorAll(".viewDates");
    const containerPopUp_viewDate = document.getElementById("container_popUp-viewDate"); 

    buttonViewDates.forEach(element=> {
        element.addEventListener('click', () => {
        containerPopUp_viewDate.style.display = 'flex'
    })
    })


    closePopUp_viewDate(containerPopUp_viewDate)
    
}

function closePopUp_viewDate(containerPopUp_viewDate) {
    containerPopUp_viewDate.addEventListener('click',  d => { 

        if (d.target.id == 'viewDates-close' || d.target == containerPopUp_viewDate) {
            containerPopUp_viewDate.style.display = 'none'
        }
    })
}

openPopUp_viewDate()

/*Pop-up - Consultar datas: Calendário*/
let calendar = document.getElementById('popUp-viewDate_calendar')

const month_names = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 
'Outubro', 'Novembro', 'Dezembro']

isLeapYear = (year) => {
    return (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) || (year % 100 === 0 && year % 400 ===0)
}

getFebDays = (year) => {
    return isLeapYear(year) ? 29 : 28
}

generateCalendar = (month, year) => {

    let calendar_days = calendar.querySelector('.calendar-days')
    let calendar_header_year = calendar.querySelector('#year')

    let days_of_month = [31, getFebDays(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    calendar_days.innerHTML = ''

    let currDate = new Date()
    if (!month) month = currDate.getMonth()
    if (!year) year = currDate.getFullYear()

    let curr_month = `${month_names[month]}`
    month_picker.innerHTML = curr_month
    calendar_header_year.innerHTML = year

    // get first day of month
    
    let first_day = new Date(year, month, 1)

    for (let i = 0; i <= days_of_month[month] + first_day.getDay() - 1; i++) {
        let day = document.createElement('div')
        if (i >= first_day.getDay()) {
            day.classList.add('calendar-day-hover')
            day.innerHTML = i - first_day.getDay() + 1
            day.innerHTML += `<span>
                            <span>
                            <span>
                            <span>`
            if (i - first_day.getDay() + 1 === currDate.getDate() && year === currDate.getFullYear() && month === currDate.getMonth()) {
                day.classList.add('curr-date')
            }
        }
        calendar_days.appendChild(day)
    }
}

let month_list = calendar.querySelector('.month-list')

month_names.forEach((e, index) => {
    let month = document.createElement('div')
    month.innerHTML = `<div data-month="${index}">${e}</div>`
    month.querySelector('div').onclick = () => {
        month_list.classList.remove('show')
        curr_month.value = index
        generateCalendar(index, curr_year.value)
    }
    month_list.appendChild(month)
})

let month_picker = calendar.querySelector('#month-picker')

month_picker.onclick = () => {
    month_list.classList.add('show')
}

let currDate = new Date()

let curr_month = {value: currDate.getMonth()}
let curr_year = {value: currDate.getFullYear()}

generateCalendar(curr_month.value, curr_year.value)

document.querySelector('#prev-year').onclick = () => {
    --curr_year.value
    generateCalendar(curr_month.value, curr_year.value)
}

document.querySelector('#next-year').onclick = () => {
    ++curr_year.value
    generateCalendar(curr_month.value, curr_year.value)
}

/*Pop-up - Avaliar o cliente*/
const openPopAvaliation = () => {
    const buttonAvaliation= document.querySelectorAll(".avaliation");
    const avaliationOwner = document.getElementById("container_popUp_avaliation-owner");

    buttonAvaliation.forEach(element=> {
        element.addEventListener('click', () => {
        avaliationOwner.style.display = 'flex'
    })
    })


    closePopAvaliation(avaliationOwner)
    
}

function closePopAvaliation(avaliationOwner) {
    avaliationOwner.addEventListener('click', e => {

        console.log(e.target)

        if (e.target == avaliationOwner) {
            avaliationOwner.style.display = 'none'
        }
    })
}

openPopAvaliation()

/*Pop-up - Avaliar o cliente: Avaliações*/
const rating = () => {

    const listStars = document.querySelector('.rating')
    const stars = document.querySelectorAll(".star")

    stars.forEach((item, index, arr)=>{
        item.addEventListener('click',(e)=>{
         
            const current_star_level = index + 1
            const lengthStars = arr.length
            
            if(index == index){
                for (let i = 0; i <= index; i++) {
                  arr[i].setAttribute('src','images/search-spaces/search/background-star.png')
                }
            }

            if(current_star_level < lengthStars){
            for (let i = index+1; i < lengthStars; i++) {
                arr[i].setAttribute('src','images/search-spaces/search/star.png')
              }
            }

        })
    })

}

rating()

const openPop_viewDate = () => {
    const buttonOpen = document.querySelectorAll(".calendar");
    const container_popUpViewDate = document.getElementById("container_popUp-viewDate");

    buttonCancel.forEach(element=> {
        element.addEventListener('click', () => {
        container_popUp_cancel.style.display = 'flex'
    })
    })


    closePopCancel(container_popUp_cancel)
    
}

/*Pop-up - Não confirmar solicitação*/
const openPopUp_cancelRequest = () => {
    const buttonCancel = document.querySelectorAll(".cancel");
    const containerPopUp_cancelRequest = document.getElementById("container_popUp-cancelRequest"); 

    buttonCancel.forEach(element=> {
        element.addEventListener('click', () => {
        container_popUp_cancelRequest.style.display = 'flex'
    })
    })


    closePopDelete(container_popUp-cancelRequest)
    
}

function closePopDelete(container_popUp_delete) {
    container_popUp_delete.addEventListener('click', e => {

        console.log(e.target)

        if (e.target.id == 'close_pop' || e.target == container_popUp_delete || e.target.id == 'no') {
            container_popUp_delete.style.display = 'none'
        }
    })
}

openPopUp_cancelRequest()
