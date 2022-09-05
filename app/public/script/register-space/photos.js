const pictureInput = document.querySelector("#picture-input");
const pictureImage = document.querySelector(".picture-image");
const pictureImageTxt = "Escolha uma imagem";
// pictureImage.innerHTML = pictureImageTxt;

pictureInput.addEventListener("change", function(e){
    const inputTarget = e.target;
    const file = inputTarget.files[0];

    if (file){
        const reader = new FileReader();

        reader.addEventListener("load", function(e){
            const readerTarget = e.target;

            const img = document.createElement("img");
            img.scr = readerTarget.result;
            img.classList.add("upImg");
            pictureImage.innerHTML = "";

            pictureImage.appendChild(img)
        });

        reader.readAsDataURL(file); 
    } else{
        // pictureImage.innerHTML = pictureImageTxt;
    }
})