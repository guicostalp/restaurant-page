function createMenu () {
    //Remove content from 'container' div
    document.getElementById('container').textContent = ''

    const div = document.createElement("div"); //create tag
    div.setAttribute("id", "menu-page"); //set ID
    div.setAttribute("class", "menu-page"); //set CLASS

    //Create DIV Content
    let createText = '';
    createText += '<div  class="header">'
    createText += '<button id="homeBtn">Home</button>'
    createText += '<button id="menuBtn">Menu</button>'
    createText += '<button id="contactBtn">Contact</button></div>'
    createText += '<h2>This is our Menu, please feel free to ask our staff if you have any question.</h2>'
    //Insert content inside DIV
    div.innerHTML = createText;

    //appendChild to div ID books
    document.getElementById("container").appendChild(div);
    
} 

export { createMenu };