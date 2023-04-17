const hamburger = document.getElementsByClassName("hamburger")[0]
const menu = document.getElementsByClassName("hedtop")[0]

function handleHeader() {
    menu.style.right = "-100%"
    hamburger.addEventListener("click", () => {
        if (menu.style.right === "-100%") {
            menu.style.right = "20px"
        } else {
            menu.style.right = "-100%"
        }
    })
}

handleHeader()