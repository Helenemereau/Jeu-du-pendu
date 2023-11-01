let recommencer = document.querySelector('.recommencer');
let proposer = document.querySelector('.Proposer');

let lettres = document. querySelectorAll(".lettre");

const motADecouvrir = ["bonzai", "colombe", "chevrefeuille", "astronaute", "documentaire", "iceberg", "biscornu", "horodateur", "hirondelle", "avalanche", "jacinthe", "charismatique", "bowling", "bibliophile", "architecture", "bourlingueur", "bibliotheque", "avalanche", "chronophrage", "carapace", "herisson", "escargot", "bateau", "scarabee", "telepherique", "feerique", "montagnard", "escapade", "ratatouille", "correspondance", "biodiversite", "parfum", "lecture", "poussette", "ordinateur", "concept", "concentration", "immersion"];

let MotAAfficher = []



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
//console.log(motChoisi)

//Couper le mot à deviner en lettres dans le tableau
let mot = motChoisi;
const motDivise = mot.split("");

//console.log(motDivise);

//créer les cases avec underscrores à découvrir

function creerCasesAvecUnderscores(mot) {
    const lettresCachées = [];
    for (let motDivise of mot) {
      if (motDivise === ' ') {
        lettresCachées.push(' ');
      } else {
        lettresCachées.push('_');
      }
    }
    return lettresCachées;
  }
  
  function afficherCasesSurDOM(casesAvecUnderscores) {
    const conteneurCases = document.getElementById("cases"); 
  
    for (let motDivise of casesAvecUnderscores) {
      const caseDiv = document.createElement("div");
      caseDiv.textContent = motDivise;
      conteneurCases.appendChild(caseDiv);
      caseDiv.style.margin = "20px";
      caseDiv.style.border = "1px solid black";
      caseDiv.style.padding = "10px";
      caseDiv.style.marginBottom = "20px";
      caseDiv.style.height = "32px";
    }
  }
  // Utilisation des fonctions pour choisir un mot aléatoire, créer les cases avec des underscores et les afficher sur le DOM
 //const motChoisi = choisirMotAleatoire();
const casesAvecUnderscores = creerCasesAvecUnderscores(motChoisi);

// Appelez la fonction pour afficher les cases dans un élément du DOM (assurez-vous d'avoir un élément avec l'ID "conteneurCases" dans votre HTML)
afficherCasesSurDOM(casesAvecUnderscores);