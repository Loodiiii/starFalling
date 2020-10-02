const bgd = document.querySelector(".bgd")

const myArray = ["star"];

function createStar(){
    for(let i=1;i < 100;i++){
        let star = document.createElement("div")
        star.style.top = Math.floor(Math.random() * 250) + "%";
        star.style.left = Math.floor(Math.random() * 250) + "%";
        star.style.height = Math.floor(Math.random() * (8 - 2 + 1) + 3) + "px";
        star.style.width = Math.floor(Math.random() * (280 - 50 + 1) + 50) + "px";
        star.style.animationDelay = Math.floor(Math.random() * 10) + "s";
        star.classList.add(myArray[Math.floor(Math.random() * 0)])

        bgd.appendChild(star)
    }
}

createStar();

const body = document.querySelector(".starsContainer")

var windowHeight = window.innerHeight;
var windowWidth = window.innerWidth;

function moveBgd(e) {
    var mouseXposition = e.clientX;
    var mouseYposition = e.clientY;

    var calculatedX = mouseXposition / (windowWidth / 7);
    var calculatedY = mouseYposition / (windowHeight / 7);

    body.style.transform = "translate(-" + calculatedX + "%,-" + calculatedY + "%)";
}

body.addEventListener("mousemove", moveBgd)