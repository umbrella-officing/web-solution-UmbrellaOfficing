function ads(x){
    const actives_space = document.getElementById("actives_space");
    const inactives_space = document.getElementById("inactives_space");

    if(x === 1){
        actives_space.style.display="block";
        inactives_space.style.display="none";
        return
    } 
    actives_space.style.display="none";
    inactives_space.style.display="block";
}