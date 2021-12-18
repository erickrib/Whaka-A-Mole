const mode = document.querySelector('.modal')
const cursor = document.querySelector(".cursor img");
// const mole = document.querySelector(".mole-")
const principal = document.querySelector(".principal")
const cabecalho = document.querySelector(".menu")
const holes = document.querySelectorAll(".hole-img")
const stopbtn = document.querySelector(".stop-button")
addEventListener("load", () => setTimeout(() =>
    mode.style.display = "block", 500))

start.addEventListener("click", () => {
    mode.style.display = "none"
    principal.style.backgroundBlendMode = "initial"
    cursor.style.display = "block"
    // mole.style.display = "block"
    stopbtn.style.display = "block"
    addEventListener("mousemove", (e) => {
        cursor.style.top = e.pageY + "px"
        cursor.style.left = e.pageX + "px"
        principal.addEventListener("mouseover", () => {
            cursor.style.display = "block"
        })
        principal.addEventListener("mouseleave", () => {
            cursor.style.display = "none"
        })
        addEventListener("click", () => {
            cursor.style.animation = "hit 0.1s ease"
            setTimeout(() => {
                cursor.style.removeProperty("animation")
              }, 80)
          })
      })

    let hole
    const startGame = setInterval(() => {
        let arrayNo = Math.floor(Math.random() * 9)
        hole = holes[arrayNo]

        let image = document.createElement("img")
        image.setAttribute("src", "mole.png")
        image.setAttribute("class", "mole-")
        hole.appendChild(image)

        setTimeout(() => {
            hole.removeChild(image)
        },600)
    }, 700)
    stopbtn.addEventListener("mouseover", () => cursor.style.display = "none")
    stopbtn.addEventListener("click", () => clearInterval(startGame)
    )
})



