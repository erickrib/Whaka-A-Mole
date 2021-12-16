const mode = document.querySelector('.modal')
addEventListener("load", () => setTimeout(() =>
    mode.style.display = "block", 500))

start.addEventListener("click", () => {
    mode.style.display = "none"
    document.body.style.backgroundBlendMode = "initial"
})