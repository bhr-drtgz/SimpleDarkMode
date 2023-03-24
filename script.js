const inputEL = document.querySelector(".input")
const bodyEl = document.querySelector("body")

inputEL.checked = true

updateBody()

function updateBody() {
    if (inputEL.checked) {
        bodyEl.style.backgroundColor = "white"
    } else {
        bodyEl.style.backgroundColor = "black"
    }
}
inputEL.addEventListener("click", () => {
    updateBody()
})