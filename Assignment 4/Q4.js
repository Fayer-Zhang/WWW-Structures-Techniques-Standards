var picture;

function start() 
{
	picture = document.getElementById( "picture" );
	document.addEventListener( "mousedown", drag, false );
	document.addEventListener( "mouseup", drop, false );
} 
 
function drag( e )
{
	if ( e.target == picture )
	{
		//drag the image
		document.addEventListener( "mousemove", processMouseMovement, false );
	} 
} 

function drop()
{
	//drop the image
	document.removeEventListener( "mousemove", processMouseMovement, false );
} 

function processMouseMovement( e )
{
	var x = e.clientX;
	var y = e.clientY;
	picture.setAttribute( "style", "top: " + y + "px; " + "left: " + x + "px" );
} 

window.addEventListener( "load", start, false );
