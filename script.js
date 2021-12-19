const mode = document.querySelector('.modal')
const cursor = document.querySelector(".cursor img")
const principal = document.querySelector(".principal")
const cabecalho = document.querySelector(".menu")
const holes = document.querySelectorAll(".hole-img")
const stopbtn = document.querySelector(".stop-button")
const returnbtn = document.querySelector(".return")
const finishbtn = document.querySelector(".finish")
const score = document.querySelector(".numbers")

addEventListener("load", () => setTimeout(() =>
    mode.style.display = "block", 500))

start.addEventListener("click", () => {
    mode.style.display = "none"
    principal.style.backgroundBlendMode = "initial"
    cursor.style.display = "block"
    stopbtn.style.display = "block"

    var duration = 60 * 2
    var display = document.querySelector(".timer-number")

    startTimer(duration, display)

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
    let points = 0

    const startGame = setInterval(function startt() {
        let arrayNo = Math.floor(Math.random() * 9)
        hole = holes[arrayNo]

        let image = document.createElement("img")
        image.setAttribute("src", "mole.png")
        image.setAttribute("class", "mole-")
        hole.appendChild(image)

        setTimeout(() => {
            hole.removeChild(image)
        }, 1900)

        stopbtn.addEventListener("mouseover", () => cursor.style.display = "none")
        stopbtn.addEventListener("click", () => {
            for(let i=0; i< holes.length;i++){
               holes[i].style.width = "0";
               holes[i].style.height = "0";
            }
            stopbtn.style.display = "none"
            returnbtn.style.display = "block"
            finishbtn.style.display = "block"
        })

        returnbtn.addEventListener("click", () => {
            for(let i=0; i< holes.length;i++){
                holes[i].style.width = "90px";
                holes[i].style.height = "110px";
             }
            stopbtn.style.display = "block"
            returnbtn.style.display = "none"
            finishbtn.style.display = "none"
        })

        finishbtn.addEventListener("click", () => {
            score.innerText = 0
        })

    }, 2000)

    addEventListener("click", (e) => {
        if (e.target === hole) {
            score.innerText = ++points
        }
    })

    function startTimer(duration, display) {
        display.style.display = "block"
        let timer = duration,
            minutes, seconds

        const timercont = setInterval(function () {
            minutes = parseInt(timer / 60, 10)
            seconds = parseInt(timer % 60, 10)

            minutes = minutes < 10 ? "0" + minutes : minutes
            seconds = seconds < 10 ? "0" + seconds : seconds

            display.innerText = minutes + ":" + seconds

            if (--timer < -1) {
                timer = duration
            }
            if (timer == -1) {

                clearInterval(startGame)
                clearInterval(timercont)
                score.innerText = 0
            }

        }, 1000);
        finishbtn.addEventListener("click", () => {
            clearInterval(timercont)
            display.style.display = "none"
        })
    }



})