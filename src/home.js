function createHome(){
    const home = document.createElement("div");
    home.classList.add("home");

    cookieImage.src = "images/Cookies.jpeg"

    home.appendChild(createPara("Mom's homemade cookies!"));
    home.appendChild(createPara("Baked fresh since 2006"));
    home.appendChild(cookieImage);
    home.appendChild(createPara("Order online for pickup or delivery!"))

    return home
}

function createPara(text){
    const para = document.createElement("p")
    para.textContent = text;
    return para;
}

function loadHome(){
    const main = document.getElementById("main")
    main.textContent = ""
    main.appendChild(createHome());
}

export default loadHome;