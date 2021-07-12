function start()
{
    var canvas = document.getElementById("shape");
    var canvas_context = canvas.getContext("2d")
    var gradient = canvas_context.createLinearGradient(0, 50, 200, 400);

    //draw a shape of star
    canvas_context.lineWidth = 6;
    canvas_context.strokeStyle = "#333";
    canvas_context.beginPath();
    canvas_context.moveTo(108, 0.0);
    canvas_context.lineTo(141, 70);
    canvas_context.lineTo(218, 78.3);
    canvas_context.lineTo(162, 131);
    canvas_context.lineTo(175, 205);
    canvas_context.lineTo(108, 170);
    canvas_context.lineTo(41.2, 205);
    canvas_context.lineTo(55, 131);
    canvas_context.lineTo(1, 78);
    canvas_context.lineTo(75, 68);
    canvas_context.lineTo(108, 0);
    canvas_context.closePath();

    gradient.addColorStop(0, "orange");
    gradient.addColorStop(1, "red");
    canvas_context.fillStyle = gradient;
    canvas_context.fill();
}
window.addEventListener( "load", start, false );