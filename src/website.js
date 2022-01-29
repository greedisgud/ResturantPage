import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";

function createHeader(){
    const header = document.createElement("header");
    header.classList.add("header");

    const name = document.createElement("h1")
    name.classList.add("resturant-name");
    name.textContent = "G-Ma's Cookies!";

    header.appendChild(name);
    header.appendChild(createNav());

    return header;

}

function createNav(){
    const nav = document.createElement("nav");

    const homeBtn = document.createElement("button");
    homeBtn.classList.add("button-nav");
    homeBtn.textContent = "Home";
    homeBtn.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(homeBtn);
        loadHome();
    });

    const menuBtn = document.createElement("button");
    menuBtn.classList.add("button-nav");
    menuBtn.textContent = "Menu";
    menuBtn.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(menuBtn);
        loadMenu();
    });

    const contactBtn = document.createElement("button");
    contactBtn.classList.add("button-nav");
    contactBtn.textContent = "Contact";
    contactBtn.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(contactBtn);
        loadContact();
    });

    nav.appendChild(homeBtn);
    nav.appendChild(menuBtn);
    nav.appendChild(contactBtn);

    return nav
}

function setActiveButton(button){
    const buttons = document.querySelectorAll(".button-nav");

    buttons.forEach((button) => {
        if (button !== this){
            button.classList.remove("active")
        }
    });

    button.classList.add("active")
}

function createMain(){
    const main = document.createElement("main");
    main.classList.add("main");
    main.setAttribute("id", "main");

    return main
}

function createFooter(){
    const footer = document.createElement("footer");
    footer.classList.add("footer");

    footer.textContent = "This is a footer";

    return footer;
}

function loadWebsite(){
    const content = document.getElementById("content");

    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild(createFooter());

    setActiveButton(document.querySelector(".nav-button"));
    loadHome();
}

export default loadWebsite;