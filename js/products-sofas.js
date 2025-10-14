// sofas

const box = document.createElement("div")
box.className = "container my-5"
box.style.backgroundColor = "#fff"

const row = document.createElement("div")
row.className = "row g-4"
box.appendChild(row)

const sofas = [
    { id: 1, name: "Leclair", link: "./images/Sofas/Léclair-2-705x705.jpg" },
    { id: 17, name: "Cocò L-shape/Corner", link: "./images/Sofas/coco-9-705x705.jpg" },
    { id: 20, name: "Gianduiotto LShape/Corner", link: "./images/sofas/download.jpg" },
    { id: 2, name: "Sir William", link: "./images/Sofas/4-5-450x450.jpg" },
    { id: 2, name: "Gianduiotto Sofa", link: "./images/Sofas/2-6-450x450.jpg" },
    { id: 16, name: "Lazy LShape/Corner", link: "./images/Sofas/4-3-450x450.jpg" },
    { id: 17, name: "Cocò Sofa", link: "./images/Sofas/cal-1018_cocò-3-white-450x449.jpg" },
    { id: 17, name: "Eliseo Sofa", link: "./images/Sofas/7-1-450x450.jpg" },
    { id: 1, name: "Banjo Sofa", link: "./images/Sofas/Banjo-1-450x450.jpg" },
    { id: 4, name: "Banjo L-Shape/Corner", link: "./images/Sofas/2-450x450.jpg" },
    { id: 1, name: "Genius Sofa", link: "./images/Sofas/Genius-10-450x450.jpg" },
    { id: 3, name: "Toby Wing L-Shape", link: "./images/Sofas/download.jpg" },
    { id: 4, name: "Nicolas L-Shape/Corner", link: "./images/Sofas/10-2-705x705.jpg" },
    { id: 5, name: "Venere", link: "./images/Sofas/1-2-705x705.jpg" },
    { id: 6, name: "Toby Wing", link: "./images/Sofas/12-705x705.jpg" },
    { id: 7, name: "Nicolas", link: "./images/Sofas/undone-705x705.jpg" },
    { id: 8, name: "Mater familias Daybed", link: "./images/Sofas/4-705x705.jpg" },
    { id: 9, name: "Mater familias", link: "./images/Sofas/3-705x705.jpg" },
    { id: 10, name: "Art nouveau", link: "./images/Sofas/1-1-705x705.jpg" },
    { id: 11, name: "Taylor Lshape", link: "./images/Sofas/Taylor-white-705x705.jpg" },
    { id: 12, name: "Paride L-Shape/Corner", link: "./images/Sofas/paride-2-705x705.jpg" },
    { id: 13, name: "Paride", link: "./images/Sofas/paride-4-1-705x705.jpg" },
    { id: 14, name: "Elisir L-Shape/Corner", link: "./images/Sofas/elisir-on-705x705.jpg" },
    { id: 15, name: "Fleur", link: "./images/Sofas/Fleur-1-705x705.jpg" },
    { id: 16, name: "Matheola LShape/Corner", link: "./images/Sofas/Matheola-1-705x705.jpg" },
    { id: 18, name: "Coco", link: "./images/Sofas/cal-1018_cocò-3-white-450x449.jpg" },
    { id: 18, name: "Matheola", link: "./images/Sofas/Matheola-10-705x705.jpg" },
    { id: 19, name: "Fox trot", link: "./images/Sofas/Fox-trot-1-705x705.jpg" },
    { id: 20, name: "Romeo Relax LShape/Corner", link: "./images/Sofas/paride-2-705x705.jpg" },
    { id: 21, name: "Elisir", link: "./images/Sofas/Elisir-web-705x705.jpg" }
];
sofas.forEach(sofa => {

    const col = document.createElement("div");
    col.className = "col-12 col-sm-6 col-md-4 col-lg-3";

    const card = document.createElement("div")
    card.className = "card h-100 shadow-sm"
    card.style.cursor = "pointer"

    const img = document.createElement("img")
    img.src = sofa.link;
    img.className = "card-img-top"

    const cardBody = document.createElement("div")
    cardBody.className = "card-body text-center"

    const title = document.createElement("h6")
    title.className = "title "
    title.innerHTML = sofa.name;

    const cardRear = document.createElement("div")
    cardRear.className = "card-rear d-flex justify-content-between p-3 text-center align-items-center"

    const showDetails = document.createElement("span")
    showDetails.className = "show-details d-flex justify-content-left item-center"
    showDetails.innerHTML = '<i class="fa-solid fa-list-ul d-flex align-self-center"></i> Show Details'

        const whishList = document.createElement("span")
    whishList.className = "whish-list d-flex justify-content-left item-center"
    whishList.innerHTML = '<i class="fa-regular fa-star d-flex align-self-center"></i> Add To Wishlist'

    document.body.appendChild(box)
    card.appendChild(img)
    card.appendChild(cardBody)
    card.append(cardRear)
    cardBody.appendChild(title)
    cardBody.appendChild(showDetails)
    cardRear.appendChild(showDetails)
    cardRear.appendChild(whishList)
    row.appendChild(col)
    col.appendChild(card)
})