// show and hidden menu
let menuToggle = document.querySelector(".menu-toggle")
let list = document.querySelector(".links")
let closeBtn = document.querySelector(".close-btn")

menuToggle.addEventListener("click", () => {
    list.style.transform = "scale(1)"
})

closeBtn.addEventListener("click", () => {
    list.style.transform = "scale(0)"
})

// style for background landing
let backGround = document.querySelector(".land-img")
backGround.style.width = "100vw"
backGround.parentElement.style.cssText = "position:relative;overflow:hidden"
backGround.nextElementSibling.style.cssText = `position:absolute;top: 50%;z-index: 10;left: 50%;width: 100vw;transform: translate(-50%,-50%);
`
/// droplist for prosducts
let products = document.querySelector(".products")
let dropdownList = document.querySelector(".dropdown-List")
dropdownList.style.display = "none"
let items = [
    { name: "sofas", link: "sofas.html" },
    { name: "chairs", link: "chairs.html" },
    { name: "tables", link: "tables.html" },
    { name: "dining", link: "dining.html" },
    { name: "complements", link: "complements.html" },
    { name: "fierplaces", link: "fierplaces.html" },
    { name: "classic", link: "classic.html" },
];

items.forEach(items => {
    let li = document.createElement("li")
    let a = document.createElement("a")
    a.href = items.link;
    a.innerHTML = items.name;
    a.style.cssText = "color:#1f1f1;padding-left: 50px;"
    a.style.textDecoration = "none"
    li.appendChild(a);
    dropdownList.appendChild(li)
})
products.appendChild(dropdownList)
products.addEventListener("click", function () {
    dropdownList.classList.toggle("hidden")
})

