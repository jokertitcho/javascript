/* console.log("bonjour"); */

var myNumber = 31;

console.log(myNumber);

var myName = "claude"; 

console.log(myName);

/* manipulation des nombres */
let firtsNumber = 23 + 24;
let result = firtsNumber + 12;
/* result = resutl + 10;  */
result += 10;

result -+ 5;

result *= 2;

result /= 8;

console.log(result);

result = 100;

result = 15;

const moduloResult = result % 3;

console.log(moduloResult);

/* les chaines de charactéres */

const firstName = "claude" ;
const lastName = "sala"; 

const sentence = 'je m\'appel claude ';
/* ecma script 6 */

const presentation = `je m'appel claude`;

/* const fullName = firstName + "-" + lastName ; */
const fullName = `${firstName} - ${lastName}`;
console.log(fullName);

let from = "j'habite a ";
from += "saint louis de montferrand"
console.log(from);

let town = "bordeaux";
let myArea = 33;

const resutl2 = town + myArea;

console.log(resutl2);

/* les booleens */

let myBoolean = true;
let myBoolean2 = false;

if(myBoolean){
    console.log(" c'est vrai");
}else {
    console.log("c'est faux");
};

let myCurrentAge = 16;
let legalAge = 18;

/* operateur de comparaison  >, >=, <, <= , == , === */

/* if(myCurrentAge === legalAge){
    console.log("tu as le droit de conduire")
}else{
    console.log("tu n'as pas le droit de conduire")
} */

if(myCurrentAge > legalAge){
    console.log("tu as le droit de conduire");
}else if(myCurrentAge< legalAge){
    console.log("tu n'as pas le droit de conduire");
}else if(myCurrentAge == legalAge){
    console.log(" tu as juste le droit de conduire");
}else{
    console.log("erreur");
};




let age1 = 12;
let age3 = 23;
let age4 = 30;
let age5 = 70;


/* ecrire 4 conditions chaineées pour afficher les resultats suivant
tu as moins de 10 ans 
tu as entre 11 et 30 ans 
tu as entre 31 et 50
tu as plus de 50 ans  */

if (myCurrentAge < 10){
    console.log("tu as moins de 10 ans");
}else if (myCurrentAge > 10 && myCurrentAge <= 30){
    console.log("tu as entre 11 et 30 ans");
}else if(myCurrentAge > 30 && myCurrentAge <=50 ){
    console.log("tu as entre 31 et 50");
}else{
    console.log("tu as plus de 50 ans")
};

/* variable complexe  : les Objets */

const myIdentity = {
    firstname : "claude",
    lastname :"sala",
    age : 41,
    town: "saint louis de montferrand"
}

 console.log( myIdentity.firstname);

 const fullNameIdentity = `${myIdentity.firstname} ${myIdentity.lastname}`  ;

 console.log(fullNameIdentity);

 /* ecrire la phrase à partir de l'objet myIdentity  bonjour, je m'appele ... , j'ai ... , et j'habite ... 
 
 ajouter une variable "adulte" ajoute un test si l'age est inferieur a 18 change la variable en enfant 
 
 concaténe cettevariable a la fin de votre phrase */

 const adulte = "je suis un adulte";
 const enfant = " je suis un enfant";

 let profilFull = `Bonjour, je m'appel ${myIdentity.firstname} ${myIdentity.lastname} j'ai ${myIdentity.age} et j'habite ${myIdentity.town} et` 



 if(myIdentity.age < 18){
    profilFull += `${enfant}`;
    console.log(profilFull);
 }else if(myIdentity.age >= 18){
    profilFull += `${adulte}`;
    console.log(profilFull);
};


// test 

const personne1 = {
    firstname : "pierre",
    lastname :"pierre",
    age : 32,
    town: "bayonne"
}
const personne2 = {
    firstname : "mathilde",
    lastname :"jean",
    age : 15,
    town: "paris"
}
const personne3 = {
    firstname : "jean",
    lastname :"jacques",
    age : 17,
    town: "bordeaux"
}
let personneTest = personne3;

/* if(personneTest.town === "bordeaux" ){
    console.log(`${personneTest.name} habite a bordeaux`)
}else{
    console.log(`${personneTest.firstname} n'habite pas a bordeaux`)
}
 */

if(personneTest.town === "bordeaux" && personneTest.age >= 18 ){
    console.log(`${personneTest.firstname} habite a bordeaux et est majeur`)
}else if(personneTest.town === "bordeaux" && personneTest.age < 18){
    console.log(`${personneTest.firstname} habite a bordeaux et est mineur`)
}else {
    console.log(`${personneTest.firstname} n'habite pas a bordeaux `)
}

/* ecrire le test pour savoir si la personne habite a paris ou a marseille */

if(personneTest.town === "bordeaux" ||  personneTest.town === "paris"){
    console.log(`${personneTest.firstname} habite a paris ou a marseille`);

}else{
    console.log(`${personneTest.firstName} n'habite pas paris ni a marseille`);
}

/* les tableaux : array */


let myArray = ["sara", "alice", "antoine", "stephane"];


let fName = myArray[3];


console.log(`${myArray[0]} ,${myArray[1]}, ${myArray[3]} sont paris`)


/* exercice suivant ---------------- */

let myArrayObjects = [
    {firstName: "sara", gender: "f"},
    {firstName:"alice",gender : "f"},
    {firstName:"pierre",gender : "m"},
    {firstName:"antoine",gender : "m"},
    {firstName:"stephane",gender : "m"}
];

let objectToTest = myArrayObjects[2];
let gone = "parti";

if(objectToTest.gender === "f"){
    gone += "e"
}
console.log(`${myArrayObjects.firstName} est ${gone} !`)