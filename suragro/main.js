import { Login } from "./js/login.js";

const nav_actions = {
    login: Login.LoadPage
};

const auth_actions = {
    login: Login.AuthAction
};

var url_domain = "suragrosolutions/";

var top_nav, page_title, sidebar, content = null;

var current_page = null;
var usr_key = null;


function GetAppNodes()
{
    top_nav = document.getElementById("top_nav");
    page_title = document.getElementById("page_title");
    content = document.getElementById("main_content");
    sidebar = document.getElementById("sidebar_content");
}

function LoadPage(page)
{
    let page_name = nav_actions[page](sidebar, content, top_nav);
            
    page_title.textContent = page_name;
    current_page = page_name.toLowerCase().replace(' ', '_');
    document.title = page_name;
}

function SetEventListeners()
{
    let interactibles = document.getElementsByClassName("interactable_zone");
    
    for (let interactable of interactibles)
    {
        interactable.addEventListener("click", (event) => {
        if (!event.target.matches("button")) return;

        if (event.target.classList.contains("nav_action"))
        {
            LoadPage(event.target.dataset.action);
        }
        
        else if (event.target.classList.contains("auth_action"))
        {
            let new_page = auth_actions[event.target.dataset.action]();

            if (new_page != null)
            {
                LoadPage(new_page);
            }
        }
    });
    }
}


function Main(){
    GetAppNodes();
    SetEventListeners();

    if (!current_page || !usr_key)
    {
        LoadPage("login")
    }
}

Main();