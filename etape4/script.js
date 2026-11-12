"use strict"

let total_points= 0;
let lignes = 1;

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

function init(){
  for (const person of persons) {
    doInsert(person.nom,person.prenom,person.points);
    total_points++;
  }

  update_summary();
}

function update_summary(){
  const element_lignes = document.getElementById("p1");
  const element_points = document.getElementById("p3");

  element_lignes.innerHTML = lignes +" ligne(s)";
  element_lignes.innerHTML = "Totale point(s)= "+ total_points;
}
function doInsert(nom,prenom,points){
  doInsertRowTable(lignes, nom, prenom, points);
  lignes++;
}

function doInsertRowTable(num,nom,prenom,points){
    const table = document.querySelector("table");

    const row = document.createElement("tr");
    row.setAttribute("class", "row");

    const col1 = document.createElement("td");
    const col2 = document.createElement("td");
    const col3 = document.createElement("td");
    const col4 = document.createElement("td");
    const col5 = document.createElement("td");
    
    col1.innerText = num;
    col2.innerText = nom;
    col3.innerText = prenom;
    col4.innerText = points;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    col5.appendChild(checkbox);

    col1.setAttribute("class","col_number");
    col2.setAttribute("class","col_text");
    col3.setAttribute("class","col_text");
    col4.setAttribute("class","col_number");
    col5.setAttribute("class","col_chckbox");

    row.appendChild(col1);
    row.appendChild(col2);
    row.appendChild(col3);
    row.appendChild(col4);
    row.appendChild(col5);

    table.appendChild(row);
}

function ConsoleTableau(){
  for (let i = 0; i < persons.length; i++){
    console.log(i +":", persons[i])
  }
}

init();