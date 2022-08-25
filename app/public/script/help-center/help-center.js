// $(document).ready(function(){
//     $("#forCustomers").click(function(){
//         $("#forCustomers").css("color", "var(--scale-5-blue)");
//         $("#forAdvertisers").css("color", "var(--text-1-black)");
//     });

//     $("#forAdvertisers").click(function(){
//         $("#forAdvertisers").css("color", "var(--scale-5-blue)");
//         $("#forCustomers").css("color", "var(--text-1-black)");
//     })
// })

const alternate = document.querySelectorAll(".btn")

alternate.forEach(btn =>{
    btn.addEventListener("click", checked)
})

function checked(){
    this.classList.add("")
}

console.log(alternate);