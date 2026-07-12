"use strict";
//-----------------run onstart------------------
    import Dashboard from "../pages/dashboard.js";

    const navigationItems = [...document.querySelectorAll(".nav-item")]

    const role = Object.freeze({
        ADMIN: true,
        SELLER: false
    });

    const loadPageMethods = Object.freeze({
        "dashboard": Dashboard
    });

    const section = {
    content: document.getElementById("content"),
    pageBody: document.getElementById("page-body"),
    pageTitle: document.getElementById("page-title"),
    navigation: document.querySelector(".navigation"),
    };

    const app = {
        currentPage: "dashboard",
        currentUser: {
            id: 1,
            name: "Administrador",
            role: role.SELLER
        },
        data: {}
    };

    navigationItems.forEach(button => {
        button.addEventListener("click", () => {
            loadPage(button.dataset.page);
        });
    });
//-----------------end onstart------------------


async function loadPage(page){
    console.log(`Now loading ${page}...`);
    section.pageBody.innerHTML = loadPageMethods[page]();
    app.currentPage = page;

    updateTitle(page);
    highlightNavigation(page);
}


function updateTitle(newTitle){
    section.pageTitle.textContent = newTitle.charAt(0).toUpperCase() + newTitle.slice(1);
}


function highlightNavigation(page){
    navigationItems.forEach( item => {
        if(item.dataset.page===page){
            item.classList.add("active");
        } else {
            item.classList.remove("active");
        }
    });
}