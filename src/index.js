console.log("Im alive!")

import {createPage} from "./landing-page.js"
import {createMenu} from "./menu-page.js"
import {createContact} from "./contact-page"



createPage();

document.addEventListener("click", (e) => {

    const target = e.target.id;
    if (target === "homeBtn") {
        createPage();
    } else if (target === "menuBtn") {

        createMenu();

    } else if (target === "contactBtn") {

        createContact();

    }


})

// landing-page.js
// menu-page.js
// contact-page.js
