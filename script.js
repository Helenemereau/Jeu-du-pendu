
let recommencer = document.querySelector(".recommencer");
let proposer = document.querySelector(".Proposer");
let commentaires = document.querySelector("#commentaires");

let lettres = document.querySelectorAll(".lettre");
let essais = document.querySelector("#essais")
let image= document.querySelector("img");
let motChoisi="";



const motADecouvrir = [
  "BONZAI",
  "COLOMBE",
  "CHEVREFEUILLE",
  "ASTRONAUTE",
  "DOCUMENTAIRE",
  "ICEBERG",
  "BISCORNU",
  "HORODATEUR",
  "HIRONDELLE",
  "AVALANCHE",
  "JACINTHE",
  "CHARISMATIQUE",
  "BOWLING",
  "BIBLIOPHILE",
  "ARCHITECTURE",
  "BOURLINGUEUR",
  "BIBLIOTHEQUE",
  "AVALANCHE",
  "CHRONOPHAGE",
  "CARAPACE",
  "HERISSON",
  "ESCARGOT",
  "BATEAU",
  "SCARABEE",
  "TELEPHERIQUE",
  "FEERIQUE",
  "MONTAGNARD",
  "ESCAPADE",
  "RATATOUILLE",
  "CORRESPONDANCE",
  "BIODIVERSITE",
  "PARFUM",
  "LECTURE",
  "POUSSETTE",
  "ORDINATEUR",
  "CONCEPT",
  "CONCENTRATION",
  "IMMERSION",
];

//Changer la couleur des boutons "Recommencer" et "Proposer un mot" au passage de la souris
recommencer.addEventListener("mouseover", () => {
recommencer.style.backgroundColor = "#E54500";
recommencer.style.cursor = "pointer"; 
});

recommencer.addEventListener("mouseout", () => {
recommencer.style.backgroundColor = "rgb(121, 61, 29)"; 
});

proposer.addEventListener("mouseover", () => {
proposer.style.backgroundColor = "#E54500";
proposer.style.cursor = "pointer";
});

proposer.addEventListener("mouseout", () => {
proposer.style.backgroundColor = "rgb(121, 61, 29)";
});


//Changement d'apparence des lettres de l'alphabet

lettres.forEach((lettre) => {
  lettre.addEventListener("mouseover", () => {
    lettre.style.fontWeight = "bold";
    lettre.style.scale = 1.2;
    lettre.style.cursor = "pointer";
  });

  lettre.addEventListener("mouseout", () => {
    lettre.style.fontWeight = "normal";
    lettre.style.scale = 1;
  });
});


//créer les cases avec underscrores en fonction du nombre de lettres du mot à découvrir

function creerCases(mot) {
  const conteneurCases = document.querySelector("#cases");

  motDivise.forEach((letr) => {
    const caseDiv = document.createElement("div");
    if (letr === " ") {
      caseDiv.textContent = " ";
    } else {
      caseDiv.textContent = "_";
    }
    caseDiv.style.margin = "10px";
    caseDiv.style.border = "1px solid black";
    caseDiv.style.padding = "10px";
    caseDiv.style.marginBottom = "20px";
    caseDiv.style.height = "32px";
    caseDiv.classList.add('caseDiv')
    conteneurCases.appendChild(caseDiv);
  });
}


//Fonction pour choisir le mot à deviner

function choisirMotAleatoire() {
  const indiceAleatoire = Math.floor(Math.random() * motADecouvrir.length);
  let motAleatoire = motADecouvrir[indiceAleatoire];
  return motAleatoire;
}

motChoisi = choisirMotAleatoire();
console.log(motChoisi);


//Couper le mot à deviner en lettres dans le tableau

let mot = motChoisi;
let motDivise = mot.split("");
console.log(motDivise);

creerCases(mot);


function jouer(){

//Récupérer la lettre cliquée
let vies = 7;
let lettresCliquees = [];
let lettresCorrectes = 0;

lettres.forEach((lettre) =>
  lettre.addEventListener("click", (e) => {
  let lettreCliquee = e.target.textContent;
   
    console.log("lettreCliquee:" + lettreCliquee);
    console.log("lettresCliquees:" + lettresCliquees);

  // Vérifier si la lettre a déjà été utilisée
    if (!lettresCliquees.includes(lettreCliquee)) {
    lettresCliquees.push(lettreCliquee);
    let lettreCorrecte = false; // Indicateur pour vérifier si la lettre cliquée est correcte

  // Parcourir le mot pour vérifier si la lettre cliquée est correcte
      motDivise.forEach((lettreDuMot, index) => {
      if (lettreDuMot.toUpperCase() === lettreCliquee.toUpperCase()) {
      allCaseDiv[index].textContent = lettreDuMot;
      lettreCorrecte = true; // La lettre est correcte 
      lettresCorrectes++
      } 
      });

    //dire "Vous avez gagné quand toutes les lettres ont été trouvées"
      if (lettresCorrectes === motDivise.length){
      commentaires.textContent=("Vous avez GAGNE !!");
      }

    //Gestion des vies
      if (!lettreCorrecte) {
      vies--;
      essais.textContent = `Il vous reste ${vies} vies`;
      console.log(vies);
      image.src = `images/image-${vies}.png`;
        
      } if(vies === 0){
        commentaires.textContent = ("Vous avez perdu !");
      }
    } else {
      commentaires.textContent = "Vous avez déjà choisi cette lettre.";
    }
  })
);
};


const allCaseDiv = document.querySelectorAll('.caseDiv')
console.log(allCaseDiv);

jouer();


//Proposer un mot

proposer.addEventListener("click", () =>{
  let proposition = prompt("Proposez un mot : ");
  if (proposition.toUpperCase === mot.toUpperCase){
  commentaires.textContent =("Vous avez gagné !!, le mot était bien " + motChoisi);
  } else {alert("Ce n'est pas çà, reessayez une autre lettre.")};
});
  

//Refaire une partie

recommencer.addEventListener("click", ()=>{
window.location.reload();
});