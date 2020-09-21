document.addEventListener("DOMContentLoaded", function(){
    const myCanvas = document.getElementById("mycanvas");
    myCanvas.height = 500;
    myCanvas.width = 500;

    const ctx = myCanvas.getContext("2d");
    ctx.fillStyle = "grey";
    ctx.fillRect(0, 0, 500, 500);

    ctx.beginPath();
    ctx.arc(250, 250, 100, 0, Math.PI, false)
    ctx.strokeStyle = "white";
    ctx.lineWidth = 50;
    ctx.stroke();
    ctx.fillStyle = "black";
    ctx.fill();
});

