let recommencer = document.querySelector('.recommencer');
let proposer = document.querySelector('.Proposer');
let commentaires = document.querySelector("#commentaires");

let lettres = document.querySelectorAll(".lettre");
let casesDiv = document.querySelectorAll("caseDiv");



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

//créer les cases avec underscrores à découvrir en fonction du nombre de lettres du mot à découvrir


function creerCases(mot){
  const conteneurCases = document.querySelector("#cases");
  const tableaucaseDiv = [];

  
  for(let letr of mot){
    const caseDiv = document.createElement("div");
    if(letr === " "){
      caseDiv.textContent = " ";
    } else {
      caseDiv.textContent = "_";
    }
    caseDiv.style.margin = "10px";
    caseDiv.style.border = "1px solid black";
    caseDiv.style.padding = "10px";
    caseDiv.style.marginBottom = "20px";
    caseDiv.style.height = "32px";
    conteneurCases.appendChild(caseDiv);
    tableaucaseDiv.push(caseDiv);
    
    
    
  }console.log(tableaucaseDiv);
}



creerCases(mot);

const tableaucaseDiv = creerCases(mot);


//Récupérer la lettre cliquée
let lettresCliquees = [];


lettres.forEach(lettre =>
  lettre.addEventListener("click", (e) => {
      let lettreCliquee = e.target.textContent;
      console.log(lettreCliquee);

      if (!lettresCliquees.includes(lettreCliquee)) {
          lettresCliquees.push(lettreCliquee);
      } else {
          commentaires.textContent = "Vous avez déjà choisi cette lettre.";
      }

      // Convertissez la lettre cliquée en minuscules (ou majuscules) pour la comparaison
      lettreCliquee = lettreCliquee.toLowerCase();

      // Recherchez l'index de la lettre cliquée (en minuscules) dans motDivise
      const indexLettre = motDivise.findIndex(letter => letter.toLowerCase() === lettreCliquee);

      if (indexLettre !== -1) {
          // Utilisez l'index pour accéder à l'élément correspondant dans tableaucaseDiv
          tableaucaseDiv[indexLettre].textContent = motDivise[indexLettre];
      }
  }
));



console.log(tableaucaseDiv);



 