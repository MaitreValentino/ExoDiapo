//Exercice 1
let celsius = 35;
let fahrenheit = celsius * 9 / 5 + 32;

let text = "La température est de " + celsius + "°C et de " + fahrenheit + "°F.";
document.getElementById("ex1").textContent = text;

//Exercice 2
let longueur = 4;
let largeur = 2;

let aire = "L'aire de ce rectangle est de " + longueur * largeur;
document.getElementById("ex2").textContent = aire;

//Exercice 3
let nom = "Suplong";
let prenom = "Valairi";

let conc = nom + " " + prenom;
document.getElementById("ex3").textContent = conc;

//Exercice 4
const TVA = 0.20;
let HT = 10;

let TTC = HT * TVA + HT;
let HTTTVATTC = "Le montant HT est de " + HT + "€, le montant TVA est de " + TVA * 100 + "% et le montant TTC est de " + TTC + "€.";
document.getElementById("ex4").textContent = HTTTVATTC;

//Exercice 5
let test = ((4 >= 6) || ("herbe" != "verte")) && !(((12 * 2) == 144) && true) ? "true" : "false";
document.getElementById("ex5").textContent = test;

//Exercice 6
let poids = 53;
let taille = 1.68;

let IMC = poids / (taille * taille);
document.getElementById("ex6").textContent = "Mon IMC est de " + IMC.toFixed(2);

//Exercice 7
const livrmin = 15;
let totalcom = 25;

let livrgrat = livrmin < totalcom ? "Livraison Gratuite !" : "Frais de livraison : 45 euros";
document.getElementById("ex7").textContent = livrgrat;

//Exercice 8
let binaire = "10011010";
let conv = parseInt(binaire, 2);

let affichconv = "Binaire = " + binaire + "; Conversion décimale  = " + conv;
document.getElementById("ex8").textContent = affichconv;

