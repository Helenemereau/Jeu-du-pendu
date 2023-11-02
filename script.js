let recommencer = document.querySelector('.recommencer');
let proposer = document.querySelector('.Proposer');
let commentaires = document.querySelector("#commentaires");

let lettres = document.querySelectorAll(".lettre");
let caseDivs = document.querySelectorAll(".case");



const motADecouvrir = ["bonzai", "colombe", "chevrefeuille", "astronaute", "documentaire", "iceberg", "biscornu", "horodateur", "hirondelle", "avalanche", "jacinthe", "charismatique", "bowling", "bibliophile", "architecture", "bourlingueur", "bibliotheque", "avalanche", "chronophrage", "carapace", "herisson", "escargot", "bateau", "scarabee", "telepherique", "feerique", "montagnard", "escapade", "ratatouille", "correspondance", "biodiversite", "parfum", "lecture", "poussette", "ordinateur", "concept", "concentration", "immersion"];





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


//Changement d'apparence des lettres de l'alphabet

lettres.forEach(lettre => {
    

lettre.addEventListener("mouseover", ()=> {
    lettre.style.fontWeight = "bold";
    lettre.style.scale = 1.2;
});

lettre.addEventListener("mouseout", ()=> {
    lettre.style.fontWeight ="normal";
    lettre.style.scale = 1;
});

});

//Fonction pour choisir le mot à deviner

function choisirMotAleatoire(){
const indiceAleatoire = Math.floor(Math.random() * motADecouvrir.length);
let motAleatoire = motADecouvrir[indiceAleatoire];

return motAleatoire
};

const motChoisi = choisirMotAleatoire();
console.log(motChoisi)

//Couper le mot à deviner en lettres dans le tableau
let mot = motChoisi;
const motDivise = mot.split("");

console.log(motDivise);

//créer les cases avec underscrores à découvrir

function creerCasesAvecUnderscores(mot) {
    const casesAvecUnderscores = [];
    for (let lettre of mot) {
      if (lettre === ' ') {
        casesAvecUnderscores.push(' ');
      } else {
        casesAvecUnderscores.push('_');
      }
    }
    return casesAvecUnderscores;
  }
  
  function afficherCasesSurDOM(casesAvecUnderscores) {
    const conteneurCases = document.getElementById("cases"); 
  
    for (let motDivise of casesAvecUnderscores) {
      const caseDiv = document.createElement("div");
      caseDiv.textContent = motDivise;
      conteneurCases.appendChild(caseDiv);
      caseDiv.style.margin = "10px";
      caseDiv.style.border = "1px solid black";
      caseDiv.style.padding = "10px";
      caseDiv.style.marginBottom = "20px";
      caseDiv.style.height = "32px";
    
    }
  }
 
const casesAvecUnderscores = creerCasesAvecUnderscores(motChoisi);

afficherCasesSurDOM(casesAvecUnderscores);

let vies = 8;


//Récupérer la lettre cliquée*/

let lettresCliquees = [];


lettres.forEach(lettre =>
    lettre.addEventListener("click", (e) => {
        let lettreCliquee = e.target.textContent
        console.log(lettreCliquee);
    

    if(!lettresCliquees.includes(lettreCliquee)){
        lettresCliquees.push(lettreCliquee);

    } else {
        commentaires.textContent = "Vous avez déjà choisi cette lettre."
    };

    if(motDivise.includes(lettreCliquee)){
    for(let i = 0; i < motDivise.length ; i++){
       if(motDivise[i] === lettreCliquee) {
        casesAvecUnderscores[i].textContent = lettreCliquee;
       } 
       afficherCasesSurDOM(casesAvecUnderscores);
    }}
}
    ));

    console.log(casesAvecUnderscores);