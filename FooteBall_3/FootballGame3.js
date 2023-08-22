

document.getElementById("pyr1").addEventListener("click", beatpyr1)
document.getElementById("pyr2").addEventListener("click", beatpyr2)
document.getElementById("pyr3").addEventListener("click", beatpyr3)
document.getElementById("pyr4").addEventListener("click", beatpyr4)


let plyer2, plyer4;
plyer2 = document.getElementById("pyr2");
plyer4 = document.getElementById("pyr4");


let ball, countwidth, countheight, funstop;
ball = document.getElementById("ball");
countwidth = 220;
countheight = 280;




function beatpyr1() {
    if (countwidth == 220) {
        funstop = setInterval(movepyr1, 10);
        plyer4.style.left = "550px";
        plyer4.style.transform = "scaleX(-1)"
    }
    else {
        alert("Sorry, Ball is another player")
    }

}
function movepyr1() {
    countwidth += 10
    countheight -= 4.8
    ball.style.left = countwidth + "px";
    ball.style.top = countheight + "px";

    if (countwidth == 630) {
        clearInterval(funstop)
        // alert(countheight)
    }
}


function beatpyr2() {
    if (countwidth == 630) {
        funstop = setInterval(movepyr2, 10);
        plyer2.style.left = "580px";
        plyer2.style.transform = "scaleX(-1)"
    }
    else {
        alert("Sorry, Ball is another player")
    }
}
let movepyr2 = () => {
    countwidth += 10
    countheight += 5.5
    ball.style.left = countwidth + "px";
    ball.style.top = countheight + "px";

    if (countwidth == 990) {
        clearInterval(funstop)
        countheight = Math.floor(countheight)
    }
}

function beatpyr3() {
    if(countwidth == 990){
    funstop = setInterval(movepyr3, 10);
    plyer2.style.left = "650px";
    plyer2.style.transform = "scaleX(1)"
    }
    else{
        alert("Sorry, Ball is another player")
    }
}
let movepyr3 = () => {
    countwidth -= 10
    countheight += 7.5
    ball.style.left = countwidth + "px";
    ball.style.top = countheight + "px";

    if (countwidth == 640) {
        clearInterval(funstop)
        countheight = 540;
    }
}


function beatpyr4() {
    if(countwidth == 640){
    funstop = setInterval(movepyr4, 10);
    plyer4.style.left = "680px";
    plyer4.style.transform = "scaleX(1)"
    }
    else{
        alert("Sorry, Ball is another player")
        
    }
}
let movepyr4 = () => {
    countwidth -= 10
    countheight -= 6
    ball.style.left = countwidth + "px";
    ball.style.top = countheight + "px";

    if (countwidth == 220) {
        clearInterval(funstop)
    }
}