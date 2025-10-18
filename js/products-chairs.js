// chairs

const box = document.createElement("div")
box.className = "container my-5 "
box.style.backgroundColor = "#fff"

const row = document.createElement("div")
row.className = "row g-4"
box.appendChild(row)

const chairs = [
    { name: "Authentic", link: "./images/chairs/DC-296-DC-297-400x400.jpg" },
    { name: "Captain Chair I", link: "./images/chairs/DC-121.jpg" },
    { name: "Captain Chair II", link: "./images/chairs/DC-156-600x600.jpg" },
    { name: "Chanel Chair", link: "./images/chairs/chanel3.jpg" },
    { name: "Coco Chair", link: "./images/chairs/coco-3-705x705.jpg" },
    { name: "Colina Chair", link: "./images/chairs/DC-028-600x600.jpg" },
    { name: "Deliziosa Chair", link: "./images/chairs/1-705x705.jpg" },
    { name: "Ferula", link: "./images/chairs/5-4-705x705.jpg" },
    { name: "Fleur Chair", link: "./images/chairs/Fleur-FBWeb-450x450.jpg" },
    { name: "Helena Chair", link: "./images/chairs/DC-031-400x400.jpg" },
    { name: "Hotel Chair", link: "./images/chairs/Hotel-31-705x705.jpg" },
    { name: "Maanhattan Bar Set", link: "./images/chairs/Bar-manhattan-600x600.jpg" },
    { name: "Mater Familias Pouf", link: "./images/chairs/23-705x705.jpg" },
    { name: "Nicols Chair", link: "./images/chairs/1-7-450x450.jpg" },
    { name: "Piroutte Chair", link: "./images/chairs/1-3-450x450.jpg" },
    { name: "Puella Chair", link: "./images/chairs/Puella-4-web-3-450x450.jpg" },
    { name: "Salina I", link: "./images/chairs/DC-083-400x400.jpg" },
    { name: "Salina II", link: "./images/chairs/DC-166-RL-400x400.jpg" },
    { name: "sandy Chair", link: "./images/chairs/adjusted2-450x450.jpg" },
    { name: "Talia Chair", link: "./images/chairs/DC-188-400x400.jpg" },
    { name: "Venere Chair", link: "./images/chairs/4-2-705x705.jpg" },
    { name: "Deliziante Chair", link: "./images/chairs/Deliziante-featured-copy-705x705.jpg" },
    { name: "Grand Hotel Chair", link: "./images/chairs/adjusted2-705x705.jpg" },
    { name: "Jacob Chair", link: "./images/chairs/1004_cal-jacob-web-1-e1544894001500-450x450.jpg" },
    { name: "Jacob Chair", link: "./images/chairs/jacob-1-705x705.jpg" },
    { name: "U'Strozz", link: "./images/chairs/U_STROZZ-featured-600x600.jpg" },
];

const chairsHover = [
    { link: "./images/chairs/DC-296-DC-297-400x400.jpg" },
    { link: "./images/chairs/DC-121.jpg" },
    { link: "./images/chairs/DC-156-600x600.jpg" },
    { link: "./images/chairs/1-4-705x705.jpg" },
    { link: "./images/chairs/1-1-705x705.jpg" },
    { link: "./images/chairs/DC-028-600x600.jpg" },
    { link: "./images/chairs/2-705x705.jpg" },
    { link: "./images/chairs/1-5-705x705.jpg" },
    { link: "./images/chairs/Fleur-2-450x450.jpg" },
    { link: "./images/chairs/DC-031-400x400.jpg" },
    { link: "./images/chairs/Hotel-13-450x450.jpg" },
    { link: "./images/chairs/Bar-manhattan-600x600.jpg" },
    { link: "./images/chairs/20-450x450.jpg" },
    { link: "./images/chairs/1-7-450x450.jpg" },
    { link: "./images/chairs/1-3-450x450.jpg" },
    { link: "./images/chairs/Puella-5-450x450.jpg" },
    { link: "./images/chairs/DC-083-400x400.jpg" },
    { link: "./images/chairs/DC-166-RL-400x400.jpg" },
    { link: "./images/chairs/Undone-450x450.jpg" },
    { link: "./images/chairs/DC-188-400x400.jpg" },
    { link: "./images/chairs/1-3-450x450.jpg" },
    { link: "./images/chairs/adjusted1-705x705.jpg" },
    { link: "./images/chairs/DC-166-RL-400x400.jpg" },
    { link: "./images/chairs/JACOB_1004-400x400.jpg" },
    { link: "./images/chairs/Jacob-2-450x450.jpg" },
    { link: "./images/chairs/U_STROZZ_CARD_4-400x400.jpg" },
];
document.body.appendChild(box)
chairs.forEach((Chair, index) => {
    const col = document.createElement("div");
    col.className = "col-12 col-sm-6 col-md-4 col-lg-3";

    const card = document.createElement("div")
    card.className = "card h-100 border-0"
    card.style.cursor = "pointer"

    const img = document.createElement("img")
    img.src = Chair.link;
    img.className = "card-img-top"

    const cardBody = document.createElement("div")
    cardBody.className = "card-body text-center p-1 "

    const title = document.createElement("h3")
    title.className = "title "
    title.innerHTML = Chair.name;
    title.style.fontSize = "15px"


    const cardRear = document.createElement("div")
    cardRear.className = "card-rear d-flex justify-content-between p-2 text-center align-items-center";

    const showDetails = document.createElement("span")
    showDetails.className = "show-details d-flex justify-content-left item-center text-nowrap";
    showDetails.innerHTML = '<i class="fa-solid fa-list-ul d-flex align-self-center "></i> Show Details';
    showDetails.style.fontSize = "11px"
    showDetails.style.fontWeight = "700"


    const whishList = document.createElement("span")
    whishList.className = "whish-list d-flex flex-row justify-content-left item-center text-nowrap";
    whishList.innerHTML = '<i class="fa-regular fa-star d-flex align-self-center"></i> Add To Wishlist';
    whishList.style.fontSize = "11px"
    whishList.style.fontWeight = "700"



    const addToCard = document.createElement("button")
    addToCard.className = "add-to-card d-flex align-items-center align-self-center text-end shadow"
    addToCard.innerHTML = "Add To Card"
    addToCard.style.color = "#fff"
    addToCard.style.backgroundColor = "#AB1F65"
    addToCard.style.border = "none"
    addToCard.style.borderRadius = "50px"
    addToCard.style.width = "50%"
    addToCard.style.height = "50px"
    addToCard.style.justifyContent = "center"
    addToCard.style.margin = "30px"


    addToCard.addEventListener("mouseover", () => {
        addToCard.style.width = "70%"
        addToCard.style.transition = "All 0.5s ease";
        addToCard.style.opacity = 0.7;
    });
    addToCard.addEventListener("mouseout", () => {
        addToCard.style.width = "40%"
        addToCard.style.transition = "All 0.5s ease";
        addToCard.style.opacity = 1;
    });

    card.appendChild(img)
    card.appendChild(cardBody)
    card.appendChild(cardRear)
    card.appendChild(addToCard)
    cardBody.appendChild(title)
    cardBody.appendChild(showDetails)
    cardRear.appendChild(showDetails)
    cardRear.appendChild(whishList)
    row.appendChild(col)
    col.appendChild(card)

    img.addEventListener("mouseover", () => {
        img.src = chairsHover[index].link;
    })
    img.addEventListener("mouseout", () => {
        img.src = chairs[index].link
    });

});
