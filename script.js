const mode = document.querySelector('.modal')
const cursor = document.querySelector(".cursor img")
const main = document.querySelector(".main")
const holes = document.querySelectorAll(".hole-img")
const stopbtn = document.querySelector(".stop-button")
const returnbtn = document.querySelector(".return")
const finishbtn = document.querySelector(".finish")
const score = document.querySelector(".numbers")

addEventListener("load", () => setTimeout(() =>
    mode.style.display = "block", 500))

start.addEventListener("click", () => {
    mode.style.display = "none"
    main.style.backgroundBlendMode = "initial"
    cursor.style.display = "block"
    stopbtn.style.display = "block"

    addEventListener("mousemove", (e) => {
        cursor.style.top = e.pageY + "px"
        cursor.style.left = e.pageX + "px"
        main.addEventListener("mouseover", () => {
            cursor.style.display = "block"
        })
        main.addEventListener("mouseleave", () => {
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
        image.setAttribute("src", "img/mole.png")
        image.setAttribute("class", "mole-")
        hole.appendChild(image)

        setTimeout(() => {
            hole.removeChild(image)
        }, 850)

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

    }, 950)

    addEventListener("click", (e) => {
        if (e.target === hole) {
            score.innerText = ++points
        }
    })

    var duration = 60 * 2
    var display = document.querySelector(".timer-number")
    startTimer(duration, display)

    function startTimer(duration, display) {
        display.style.display = "block"
        let timer = duration, minutes, seconds
        let pause = 1
        const timercont = setInterval(function () {
            if (pause == 1) {minutes = parseInt(timer / 60, 10)
            seconds = parseInt(timer % 60, 10)
            minutes = minutes < 10 ? "0" + minutes : minutes
            seconds = seconds < 10 ? "0" + seconds : seconds

            if (--timer < -1) {
                timer = duration
            }

            if (timer == -1) {
                clearInterval(startGame)
                clearInterval(timercont)
                score.innerText = 0
                stopbtn.style.display = "none"
                finishbtn.style.left = "47.4%"
                finishbtn.style.display = "block"
            }
        }

            display.innerText = minutes + ":" + seconds
            
            stopbtn.addEventListener("click", () => {
                pause = 0
             })

             returnbtn.addEventListener("click", () => {
               pause = 1
            })
        }, 1000);

        finishbtn.addEventListener("click", () => {
            clearInterval(timercont)
            location.reload();
        })
    }
})