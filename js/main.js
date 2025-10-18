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

// *******btn toup***********
let btnUp = document.createElement("button")
btnUp.innerHTML = `<i class="fa-solid fa-circle-up"></i>`
btnUp.style.cssText = `color: var(--sec-color);
    border: none;
    background: none;
    cursor: pointer;
    font-size: 2rem;
    position:fixed;
    right:5px;
    ;bottom:30px;padding:0`
document.body.append(btnUp)
btnUp.onclick = () => {
    window.scrollTo({
        top: 0

    })
}
window.addEventListener("scroll", () => {
    if (window.scrollY >= 100) {
        btnUp.style.display = "block"
    }
    else {
        btnUp.style.display = "none"
    }
});

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
//shopping section
let aside = document.createElement("aside")
let btnShopping = document.createElement("button")
aside.classList.add("cart")
aside.style.cssText = `position: fixed;
    top: 0;
    width: 300px;
    height: 100%;transform: translateX(-100%);
    background: var(--bg-color);
    box-shadow: 0 0 12px 1px var(--sec-txt);z-index: 100;transition:.5s`

btnShopping.className = "cart-toggle"
btnShopping.innerHTML = `<i class="fa-solid fa-cart-shopping"></i>`
btnShopping.style.cssText = `color: white;
    background: var(--sec-color);
    border: none;
    padding: 7px;
    position: absolute;
    top: 50%;
    left: 300px;
    font-size: 1.3rem;
    border-radius: 4px;
    cursor: pointer;`
aside.append(btnShopping)
document.body.prepend(aside)

btnShopping.addEventListener("click", () => {
    aside.classList.toggle("show")
})


// style for background landing
let backGround = document.querySelector(".land-img")
if (backGround) {
    backGround.style.width = "100%"
    backGround.parentElement.style.cssText = "position:relative;overflow:hidden"
    backGround.nextElementSibling.style.cssText = `position:absolute;top: 50%;z-index: 10;left: 50%;width: 100vw;transform: translate(-50%,-50%);
`}

///************wrap image****************///
let images = [
    { src: "images/Home/home06.jpg", data: "sofas" },
    { src: "images/Home/home07.jpg", data: "recliners" },
    { src: "images/Home/home08.jpg", data: "dinin Tables" },
    { src: "images/Home/home07.jpg", data: "chairs" },
    { src: "images/Home/home06.jpg", data: "coffee tables" }
];
let ul = document.querySelector(".wrap-img");
if (ul) {
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
}
// *********feature****
let feature = document.querySelector(".feature")
let heading = document.createElement("img")
if (heading) {
    heading.style.cssText = `max-width:100%;transform: translateY(70px);transition:.5s`
    heading.className = "head"
    heading.src = 'images/Home/home10.jpg'
}
if (feature) {
    feature.style.cssText = `text-align:center;padding:100px 0;`
    feature.prepend(heading)
}

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
let featContainer = document.querySelector(".feature .container")
let cardImg = [
    { src: "images/Home/home11.png", title: "venere" },
    { src: "images/Home/home12.png", title: "Mater familias Daybed" },
    { src: "images/Home/home14.png", title: "dinin Tables" },
    { src: "images/Home/home20.png", title: "Jacob Chair" },
    { src: "images/Home/home19.png", title: "Niobe" },
    { src: "images/Home/home25.png", title: "Belle Epoque" }
];

if (featContainer) {
    let cards = document.createElement("div")
    cards.className = "cards"
    cardImg.forEach(e => {
        ///card
        let card = document.createElement("div")
        card.className = "card"
        // img in card
        let img = document.createElement("img")
        img.src = e.src
        // title in card
        let title = document.createElement("h3")
        title.textContent = e.title
        // btn-actions
        let btnActions = document.createElement("div")
        btnActions.className = "btn-actions"
        btnActions.innerHTML = `<button class="btn btn--details" type="button">
                  <i class="fa-solid fa-file-lines"></i>
                  Show details
                </button>
                <button class="btn btn--primary" type="button">
                  <i class="fa-regular fa-star"></i>
                  Add to wishlist
                </button>`
        card.append(img, title, btnActions)
        cards.append(card)
        featContainer.append(cards)

    })
}

//******brand section*******//
let brandContainer = document.querySelector("#brands .container")
let brandImge = [
    { src: "images/Home/home32.png" },
    { src: "images/Home/home31.png" },
    { src: "images/Home/home34.png" },
    { src: "images/Home/home29.png" },
    { src: "images/Home/home30.png" },
    { src: "images/Home/home27.png" },
]
if (brandContainer) {
    // head brand
    let headImge = document.createElement("img")
    headImge.src = `images/Home/home26.jpg`
    brandContainer.style.textAlign = "center"
    brandContainer.append(headImge)
    let brandoserv = new IntersectionObserver(imgs => {
        imgs.forEach(img => {
            if (img.isIntersecting) {
                headImge.style.cssText = `transition:1s;opacity:1;transform:translateY(0);max-width:100%`
            }
            else {
                headImge.style.cssText = `opacity:0;transform:translateY(30px);max-width:100%`
            }
        })
    })

    brandoserv.observe(headImge)
    // create brands logo
    let logos = document.createElement("div")
    brandImge.forEach(img => {
        // create img 
        let logo = document.createElement("img")
        logo.style.maxWidth = "100%"
        logo.src = img.src
        logos.append(logo)
        brandContainer.append(logos)
    })
}

// ***********footer********
let footer = document.querySelector("footer")
let p = document.createElement("p")
let year = new Date().getFullYear()
p.textContent = `
© Copyright ${year} - Blend Furniture - Design & powered by NTI`
p.style.cssText = `text-align:center;padding:15px;background:var(--bg-color-dark);color:var(--sec-txt-dark);font-size: .8rem;`
footer.append(p)



