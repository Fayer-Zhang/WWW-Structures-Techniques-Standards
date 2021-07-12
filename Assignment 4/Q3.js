function start()
{
	document.addEventListener( "click",  tiggerEvent, false );
}

function tiggerEvent( event )
{
	if ( event.shiftKey )
	{
		alert( event.type );
	}
	
	if ( event.ctrlKey )
	{
		alert( event.target.tagName );
	}
}

window.addEventListener( "load", start, false );