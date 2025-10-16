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


/// ****************droplist for prosducts*********
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
// create element in droplist
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


let links = document.querySelectorAll(".links a")
links.forEach((a) => {
    a.addEventListener("click", (e) => {
        links.forEach((el) => {
            el.classList.remove("active")
        })
        e.target.classList.add("active")
    })
}
)
// style for background landing
let backGround = document.querySelector(".land-img")
backGround.style.width = "100%"
backGround.parentElement.style.cssText = "position:relative;overflow:hidden"
backGround.nextElementSibling.style.cssText = `position:absolute;top: 50%;z-index: 10;left: 50%;width: 100vw;transform: translate(-50%,-50%);
`

///************wrap image****************///
let images = [
    { src: "images/Home/home06.jpg", data: "sofas" },
    { src: "images/Home/home07.jpg", data: "recliners" },
    { src: "images/Home/home08.jpg", data: "dinin Tables" },
    { src: "images/Home/home05.jpg", data: "chairs" },
    { src: "images/Home/home06.jpg", data: "coffee tables" }
];
let ul = document.querySelector(".wrap-img");
images.forEach(image => {
    // create Element
    let li = document.createElement("li")
    let a = document.createElement("a")
    let img = document.createElement("img");
    img.src = image.src;
    a.setAttribute("data-text", image.data);
    a.append(img)
    li.append(a)
    ul.append(li)
})

// *********feature****
let feature = document.querySelector(".feature")
let heading = document.createElement("img")
feature.style.cssText = `text-align:center;padding:100px 0;`
heading.style.cssText = `max-width: 100%;transform: translateY(70px);transition:.5s`
heading.className = "head"
heading.src = 'images/Home/home10.jpg'
feature.prepend(heading)
// moving in scroll 
const observHead = new IntersectionObserver(e => {
    e.forEach(img => {
        if (img.isIntersecting) {
            img.target.style.transform = "translateY(0)";
        } else {
            img.target.style.transform = "translateY(70px)";
        }
    })
})
observHead.observe(heading)
// create cards
let featContainer = document.querySelector(".feature .constainer")
let cards = document.createElement("div")
cards.className = "cards"
let cardImg = [
    { src: "images/", data: "sofas" },
    { src: "images/Home/home07.jpg", data: "recliners" },
    { src: "images/Home/home08.jpg", data: "dinin Tables" },
    { src: "images/Home/home05.jpg", data: "chairs" },
    { src: "images/Home/home06.jpg", data: "coffee tables" }
];


