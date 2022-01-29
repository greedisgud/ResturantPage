function createContact(){
    const contact = document.createElement("div")
    contact.classList.add("contact");

    const phoneNo = document.createElement("p")
    phoneNo.textContent = "000 000 0000"

    const address = document.createElement("p")
    address.textContent = "123 Milky Way"

    const location = document.createElement("p")
    location.textContent = "Earth 12232343213 miles from the Sun"

    contact.appendChild(phoneNo);
    contact.appendChild(address);
    contact.appendChild(location);

    return contact
}

function loadContact(){
    const main = document.getElementById("main")
    main.textContent = ""
    main.appendChild(createContact());
}

export default loadContact;