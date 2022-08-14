function ads(x) {
    const actives_space = document.getElementById("actives_space");
    const inactives_space = document.getElementById("inactives_space");

    if (x === 1) {
        actives_space.style.display = "block";
        inactives_space.style.display = "none";
        return
    }
    actives_space.style.display = "none";
    inactives_space.style.display = "block";
}

const openPopDelete = () => {
    const iconDelete = document.querySelectorAll(".delete");
    const container_popUp_delete = document.getElementById("container_popUp_delete");

    iconDelete.forEach(element=> {
        element.addEventListener('click', () => {
        container_popUp_delete.style.display = 'flex'
    })
    })

    closePopDelete(container_popUp_delete)
    
}

function closePopDelete(container_popUp_delete) {
    container_popUp_delete.addEventListener('click', e => {

        if (e.target.id == 'close_pop' || e.target == container_popUp_delete) {
            container_popUp_delete.style.display = 'none'
        }
    })
}

openPopDelete()