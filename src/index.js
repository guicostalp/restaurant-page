console.log("Im alive!")

function createDiv () {

    const div = document.createElement("div"); //create tag
    div.setAttribute("id", "landing-page"); //set ID
    div.setAttribute("class", "landing-page"); //set CLASS

    //Create DIV Content
    let createText = '';
    createText += '<div  class="header">This is the Header and it is awesome</div>'
    createText += '<h2> This is a wonderfull restaurant. The website is even better</h2>'

    //Insert content inside DIV
    div.innerHTML = createText;

    //appendChild to div ID books
    document.getElementById("container").appendChild(div);
    
} 

createDiv();