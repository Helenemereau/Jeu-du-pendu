let recommencer = document.querySelector('.recommencer');
let proposer = document.querySelector('.Proposer');


//Changer la couleur des boutons "Recommencer" et "Proposer un mot" au passage de la souris
recommencer.addEventListener("mouseover", ()=>{
    recommencer.style.backgroundColor = "#E54500";

});
recommencer.addEventListener("mouseout", ()=>{
    recommencer.style.backgroundColor = "rgb(121, 61, 29)";

})

proposer.addEventListener("mouseover", ()=>{
    proposer.style.backgroundColor = "#E54500";

});
proposer.addEventListener("mouseout", ()=>{
    proposer.style.backgroundColor = "rgb(121, 61, 29)";

});