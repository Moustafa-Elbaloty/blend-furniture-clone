var prosducts = document.querySelector(".products")
prosducts.style.position="relative"

// var Div = document.createElement("div")
// Div.style.width = "200px"
// Div.style.backgroundColor = "lightgreen"
// Div.style.zIndex="3"
// Div.style.display="flex"
// Div.style.left="1100px"

var dropdownList = document.createElement("ul")
dropdownList.className = "dropdown_List hidden"
dropdownList.display = "none"

var items = [
    { name: "sofas", link: "sofas.html" },
    { name: "chairs", link: "chairs.html" },
    { name: "tables", link: "tables.html" },
    { name: "dining", link: "dining.html" },
    { name: "complements", link: "complements.html" },
    { name: "fierplaces", link: "fierplaces.html" },
    { name: "classic", link: "classic.html" },
];

items.forEach(items => {
    var li = document.createElement("li")
    var a = document.createElement("a")
    a.href = items.link;
    a.innerHTML = items.name;
    a.style.color = "#1f1f1"
    a.style.textDecoration = "none"
    li.appendChild(a);
    dropdownList.appendChild(li)
})
// Div.appendChild(dropdownList)
prosducts.appendChild(dropdownList)


prosducts.addEventListener("click", function () {
    dropdownList.classList.toggle("hidden")
})

