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
backGround.style.maxWidth = "100%"
backGround.parentElement.style.position = "relative"
backGround.nextElementSibling.style.cssText = `position:absolute;top: 50%;z-index: 10;left: 50%;width: 100vw;transform: translate(-50%,-50%);
`


