// sofas

const box = document.createElement("div")
box.className = "container my-5"
box.style.backgroundColor = "#fff"

const row = document.createElement("div")
row.className = "row g-4"
box.appendChild(row)

const sofas = [
    { name: "Leclair", link: "./images/sofas/Léclair-2-705x705.jpg" },
    { name: "Cocò L-shape/Corner", link: "./images/sofas/coco-9-705x705.jpg" },
    { name: "Gianduiotto LShape/Corner", link: "./images/sofas/download.jpg" },
    { name: "Sir William", link: "./images/sofas/4-5-450x450.jpg" },
    { name: "Gianduiotto Sofa", link: "./images/sofas/2-6-450x450.jpg" },
    { name: "Lazy LShape/Corner", link: "./images/sofas/4-3-450x450.jpg" },
    { name: "Cocò Sofa", link: "./images/sofas/cal-1018_cocò-3-white-450x449.jpg" },
    { name: "Eliseo Sofa", link: "./images/sofas/7-1-450x450.jpg" },
    { name: "Banjo Sofa", link: "./images/sofas/Banjo-1-450x450.jpg" },
    { name: "Banjo L-Shape/Corner", link: "./images/sofas/2-450x450.jpg" },
    { name: "Genius Sofa", link: "./images/sofas/Genius-10-450x450.jpg" },
    { name: "Toby Wing L-Shape", link: "./images/sofas/download.jpg" },
    { name: "Nicolas L-Shape/Corner", link: "./images/sofas/10-2-705x705.jpg" },
    { name: "Venere", link: "./images/sofas/1-2-705x705.jpg" },
    { name: "Toby Wing", link: "./images/sofas/12-705x705.jpg" },
    { name: "Nicolas", link: "./images/sofas/undone-705x705.jpg" },
    { name: "Mater familias Daybed", link: "./images/sofas/4-705x705.jpg" },
    { name: "Mater familias", link: "./images/sofas/3-705x705.jpg" },
    { name: "Art nouveau", link: "./images/sofas/1-1-705x705.jpg" },
    { name: "Taylor Lshape", link: "./images/sofas/Taylor-white-705x705.jpg" },
    { name: "Paride L-Shape/Corner", link: "./images/sofas/paride-2-705x705.jpg" },
    { name: "Paride", link: "./images/sofas/paride-4-1-705x705.jpg" },
    { name: "Elisir L-Shape/Corner", link: "./images/sofas/elisir-on-705x705.jpg" },
    { name: "Fleur", link: "./images/sofas/Fleur-1-705x705.jpg" },
    { name: "Matheola LShape/Corner", link: "./images/sofas/Matheola-1-705x705.jpg" },
    { name: "Coco", link: "./images/sofas/cal-1018_cocò-3-white-450x449.jpg" },
    { name: "Matheola", link: "./images/sofas/Matheola-10-705x705.jpg" },
    { name: "Fox trot", link: "./images/sofas/Fox-trot-1-705x705.jpg" },
    { name: "Romeo Relax LShape/Corner", link: "./images/sofas/paride-2-705x705.jpg" },
    { name: "Elisir", link: "./images/sofas/Elisir-web-705x705.jpg" }
];

const sofasHover = [
    { link: "./images/Sofas/Léclair-1-705x705.jpg" },
    { link: "./images/sofas/coco-9-705x705.jpg" },
    { link: "./images/sofas/download.jpg" },
    { link: "./images/Sofas/1-6-450x450.jpg" },
    { link: "./images/sofas/2-6-450x450.jpg" },
    { link: "./images/Sofas/3-3-450x450.jpg" },
    { link: "./images/sofas/cal-1018_cocò-3-white-450x449.jpg" },
    { link: "./images/Sofas/2-1-450x450.jpg" },
    { link: "./images/Sofas/3-450x450.jpg" },
    { link: "./images/sofas/2-450x450.jpg" },
    { link: "./images/Sofas/Genius-2-450x450.jpg" },
    { link: "./images/Sofas/18.jpg" },
    { link: "./images/Sofas/3-9.jpg" },
    { link: "./images/Sofas/1-1-500x500.jpg" },
    { link: "./images/Sofas/5.jpg" },
    { link: "./images/Sofas/5-6.jpg" },
    { link: "./images/Sofas/27.jpg" },
    { link: "./images/Sofas/234.jpg" },
    { link: "./images/Sofas/4.jpg" },
    { link: "./images/Sofas/Taylor-web4.jpg" },
    { link: "./images/Sofas/paride-3.jpg" },
    { link: "./images/sofas/paride-4-1-705x705.jpg" },
    { link: "./images/Sofas/Elisir7.jpg" },
    { link: "./images/Sofas/Fleur-3.jpg" },
    { link: "./images/Sofas/Matheola-4.jpg" },
    { link: "./images/Sofas/cal-1018_cocò-3-1030x1028.jpg" },
    { link: "./images/Sofas/Matheola-11.jpg" },
    { link: "./images/Sofas/Fox-trot-3.jpg" },
    { link: "./images/Sofas/2-12.jpg" },
    { link: "./images/Sofas/Elisir2.jpg" }
];
document.body.appendChild(box)
sofas.forEach((sofa, index) => {
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
    cardRear.className = "card-rear d-flex justify-content-between p-3 text-center align-items-center";

    const showDetails = document.createElement("span")
    showDetails.className = "show-details d-flex justify-content-left item-center";
    showDetails.innerHTML = '<i class="fa-solid fa-list-ul d-flex align-self-center"></i> Show Details';

    const whishList = document.createElement("span")
    whishList.className = "whish-list d-flex justify-content-left item-center";
    whishList.innerHTML = '<i class="fa-regular fa-star d-flex align-self-center"></i> Add To Wishlist';
    card.appendChild(img)
    card.appendChild(cardBody)
    card.append(cardRear)
    cardBody.appendChild(title)
    cardBody.appendChild(showDetails)
    cardRear.appendChild(showDetails)
    cardRear.appendChild(whishList)
    row.appendChild(col)
    col.appendChild(card)

    img.addEventListener("mouseover", () => {
        img.src = sofasHover[index].link;
    })
    img.addEventListener("mouseout", () => {
        img.src = sofa.link;
    })
})
