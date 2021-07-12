function start()
{
	var canvas = document.getElementById("shadow");
    var canvas_context = canvas.getContext("2d")
    canvas_context.shadowOffsetX = 2; //offset-x of 2px
    canvas_context.shadowOffsetY = 5; //offset-y of 5px
    canvas_context.shadowBlur = 6; //blur of 6px
    canvas_context.shadowColor = "gray"; //text-shadow color gray
    canvas_context.font = "102px monospace";
    var txt = "HTML5 Canvas";
    canvas_context.fillText (txt, 10, 100);
}
window.addEventListener( "load", start, false );