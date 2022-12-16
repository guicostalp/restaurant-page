function createPage () {
    //Remove content from 'container' div
    document.getElementById('container').textContent = ''

    const div = document.createElement("div"); //create tag
    div.setAttribute("id", "landing-page"); //set ID
    div.setAttribute("class", "landing-page"); //set CLASS

    //Create DIV Content
    let createText = '';
    createText += '<div  class="header">'
    createText += '<button id="homeBtn">Home</button>'
    createText += '<button id="menuBtn">Menu</button>'
    createText += '<button id="contactBtn">Contact</button></div>'
    createText += '<h2>This is a wonderfull restaurant. The website is even better</h2>'
    //Insert content inside DIV
    div.innerHTML = createText;

    //appendChild to div ID books
    document.getElementById("container").appendChild(div);
    
} 

export { createPage };