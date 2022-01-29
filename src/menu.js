function createMenu(){

    const menu = document.createElement("div");
    menu.classList.add("menu");

    menu.appendChild(
        createMenuItem(
            "Chocolate-Chip-Cookies", "Chewy, delicious cookies"
        )
    );

    menu.appendChild(
        createMenuItem(
            "Oatmeal-Raisan", "Old School Classic"
        )
    );

    menu.appendChild(
        createMenuItem(
            "Keto-Cookies", "Maintain that 2022 diet"
        )
    );

    return menu
}

function createMenuItem(name, discription){

    const menuItem = document.createElement("menu-item");

    const foodTitle = document.createElement("h2");
    foodTitle.textContent = name;

    const foodDisc = document.createElement("p");
    foodDisc.textContent = discription;

    const foodImage = document.createElement("img");
    foodImage.src = `images/${name.toLowerCase()}.jpeg`

    menuItem.appendChild(foodImage);
    menuItem.appendChild(foodTitle);
    menuItem.appendChild(foodDisc);


    return menuItem
}

function loadMenu(){
    const main = document.getElementById("main")
    main.textContent = ""

    main.appendChild(createMenu());
}

export default loadMenu;