/*Ici on utilise use strict, vu dans le slide 51 */
"use strict"
/*Ici on utilise les tableaux, vu dans le slide 38 */
const persons = [
  {
    nom: "person",
    prenom: "person",
    points: 1,
  },
  {
    nom: "person",
    prenom: "person",
    points: 1,
  },
  {
    nom: "person",
    prenom: "person",
    points: 1,
  },
]
/*Ici on utilise une declaration de variable , vu dans le slide 37 */
let lignes = 1;

function init(){
  /*Ici on utilise une boucle, vu dans le slide 44 */
  for (const person of persons) {
    /*Ici on utilise un appel de fonction , vu dans le slide 47 */
    doInsert(person.nom,person.prenom,person.points);    
  }
}

function doInsert(nom,prenom,points){
  /*Ici on utilise un appel de fonction , vu dans le slide 47 */
  doInsertRowTable(lignes, nom, prenom, points);
  /*Ici on utilise une opperation , vu dans le slide 41 */
  lignes++;
}

/*Ici on utilise une fonction, vu dans le slide 45 */
function doInsertRowTable(num,nom,prenom,points){
    /*Ici on utilise le querySelector, vu dans le slide 76 */
    const table = document.querySelector("table");
    /*Ici on utilise la methode createElement et appendChild  , vu dans le slide 104 */
    const row = document.createElement("tr");
    row.setAttribute("class", "row");

    const col1 = document.createElement("td");
    const col2 = document.createElement("td");
    const col3 = document.createElement("td");
    const col4 = document.createElement("td");
    const col5 = document.createElement("td");
    /*Ici on utilise innerText, vu dans le slide 90 */
    col1.innerText = num;
    col2.innerText = nom;
    col3.innerText = prenom;
    col4.innerText = points;
    /*Ici on utilise l' acces aux attributs, vu dans le slide 92 */
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    col5.appendChild(checkbox);
    /*Ici on utilise setAttribute, vu dans le slide 107 */
    col1.setAttribute("class","col_number");
    col2.setAttribute("class","col_text");
    col3.setAttribute("class","col_text");
    col4.setAttribute("class","col_number");
    col5.setAttribute("class","col_chkbox");
    /*Ici on utilise la methode appendChild  , vu dans le slide 104 */
    row.appendChild(col1);
    row.appendChild(col2);
    row.appendChild(col3);
    row.appendChild(col4);
    row.appendChild(col5);

    table.appendChild(row);
}
function ConsoleTableau(){
  let j = 1
  for (let i = 0; i < persons.length; i++){
    /*Ici on utilise console.log, vu dans le slide 33 */
    console.log(j+":", persons[i])
    j++;
  }
}
/*Ici on utilise un appel de fonction , vu dans le slide 47 */
init();