/*Ici on utilise use strict, vu dans le slide 51 */
"use strict"
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