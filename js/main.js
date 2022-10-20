const container = document.querySelector(".container");
const ball = document.querySelector(".ball");

container.addEventListener("click", (e) => {
    console.log(e);
    console.log(e.pageY);
    console.log(ball.height);
    ball.style.left = e.offsetX -25 + "px"; 
    ball.style.top = e.offsetY -25 + "px"; 
    ball.style.transition = "all 2s";
});