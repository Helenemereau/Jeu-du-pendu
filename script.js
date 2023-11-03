let recommencer = document.querySelector(".recommencer");
let proposer = document.querySelector(".Proposer");
let commentaires = document.querySelector("#commentaires");

let lettres = document.querySelectorAll(".lettre");

const motADecouvrir = [
  "bonzai",
  "colombe",
  "chevrefeuille",
  "astronaute",
  "documentaire",
  "iceberg",
  "biscornu",
  "horodateur",
  "hirondelle",
  "avalanche",
  "jacinthe",
  "charismatique",
  "bowling",
  "bibliophile",
  "architecture",
  "bourlingueur",
  "bibliotheque",
  "avalanche",
  "chronophrage",
  "carapace",
  "herisson",
  "escargot",
  "bateau",
  "scarabee",
  "telepherique",
  "feerique",
  "montagnard",
  "escapade",
  "ratatouille",
  "correspondance",
  "biodiversite",
  "parfum",
  "lecture",
  "poussette",
  "ordinateur",
  "concept",
  "concentration",
  "immersion",
];

//Changer la couleur des boutons "Recommencer" et "Proposer un mot" au passage de la souris
recommencer.addEventListener("mouseover", () => {
  recommencer.style.backgroundColor = "#E54500";
});
recommencer.addEventListener("mouseout", () => {
  recommencer.style.backgroundColor = "rgb(121, 61, 29)";
});

proposer.addEventListener("mouseover", () => {
  proposer.style.backgroundColor = "#E54500";
});
proposer.addEventListener("mouseout", () => {
  proposer.style.backgroundColor = "rgb(121, 61, 29)";
});

//Changement d'apparence des lettres de l'alphabet

lettres.forEach((lettre) => {
  lettre.addEventListener("mouseover", () => {
    lettre.style.fontWeight = "bold";
    lettre.style.scale = 1.2;
  });

  lettre.addEventListener("mouseout", () => {
    lettre.style.fontWeight = "normal";
    lettre.style.scale = 1;
  });
});

//Fonction pour choisir le mot à deviner

function choisirMotAleatoire() {
  const indiceAleatoire = Math.floor(Math.random() * motADecouvrir.length);
  let motAleatoire = motADecouvrir[indiceAleatoire];

  return motAleatoire;
}

const motChoisi = choisirMotAleatoire();
console.log(motChoisi);

//Couper le mot à deviner en lettres dans le tableau
let mot = motChoisi;
const motDivise = mot.split("");

console.log(motDivise);

//créer les cases avec underscrores à découvrir en fonction du nombre de lettres du mot à découvrir

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

let vies = 8;

creerCases(mot);

//Récupérer la lettre cliquée*/

let lettresCliquees = [];

lettres.forEach((lettre) =>
  lettre.addEventListener("click", (e) => {
    let lettreCliquee = e.target.textContent;
    console.log("lettreCliquee:" + lettreCliquee);
    console.log("lettresCliquees:" + lettresCliquees);

    // la lettre a t elle déjà été utilisée ?
    if (!lettresCliquees.includes(lettreCliquee)) {
      lettresCliquees.push(lettreCliquee);
    } else {
      commentaires.textContent = "Vous avez déjà choisi cette lettre.";
    }

    motDivise.forEach((lettreDuMot, index) => {
      if (lettreDuMot.toUpperCase() === lettreCliquee.toUpperCase()) {
        allCaseDiv[index].textContent = lettreDuMot
      }
    });

  })
);
const allCaseDiv = document.querySelectorAll('.caseDiv')
console.log(allCaseDiv);









 