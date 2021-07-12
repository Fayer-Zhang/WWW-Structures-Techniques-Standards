var board;

function start()
{
   // create the puzzle board
	board = [
				[document.getElementById( "grid_11" ),document.getElementById( "grid_12" ),
				 document.getElementById( "grid_13" ),document.getElementById( "grid_14" )],
				[document.getElementById( "grid_21" ),document.getElementById( "grid_22" ),
				 document.getElementById( "grid_23" ),document.getElementById( "grid_24" ) ],
				[document.getElementById( "grid_31" ),document.getElementById( "grid_32" ),
				 document.getElementById( "grid_33" ),document.getElementById( "grid_34" ) ],
				[document.getElementById( "grid_41" ), document.getElementById( "grid_42" ),
				 document.getElementById( "grid_43" ),document.getElementById( "grid_44" ) ]
			];

	board[0][0].addEventListener( "click", function(){ playGame( 0, 0 ); }, false );
	board[0][1].addEventListener( "click", function(){ playGame( 0, 1 ); }, false );
	board[0][2].addEventListener( "click", function(){ playGame( 0, 2 ); }, false );
	board[0][3].addEventListener( "click", function(){ playGame( 0, 3 ); }, false );
	board[1][0].addEventListener( "click", function(){ playGame( 1, 0 ); }, false );
	board[1][1].addEventListener( "click", function(){ playGame( 1, 1 ); }, false );
	board[1][2].addEventListener( "click", function(){ playGame( 1, 2 ); }, false );
	board[1][3].addEventListener( "click", function(){ playGame( 1, 3 ); }, false );
	board[2][0].addEventListener( "click", function(){ playGame( 2, 0 ); }, false );
	board[2][1].addEventListener( "click", function(){ playGame( 2, 1 ); }, false );
	board[2][2].addEventListener( "click", function(){ playGame( 2, 2 ); }, false );
	board[2][3].addEventListener( "click", function(){ playGame( 2, 3 ); }, false );
	board[3][0].addEventListener( "click", function(){ playGame( 3, 0 ); }, false );
	board[3][1].addEventListener( "click", function(){ playGame( 3, 1 ); }, false );
	board[3][2].addEventListener( "click", function(){ playGame( 3, 2 ); }, false );
	board[3][3].addEventListener( "click", function(){ playGame( 3, 3 ); }, false );

	newGame();
	document.getElementById("check_status_button").addEventListener( "click", checkStatus);
}


function newGame()
{
	var numbers = [];

	for ( var i = 0; i < 16 ; i++ )
	{
		numbers[ i ] = i;
	}
   
	for (var i = 1; i < 16 ; i++ ) 
	{
		var j = Math.floor(Math.random() * (i + 1));
		[numbers[ i ], numbers[ j ]] = [numbers[ j ], numbers[ i ]];
	}

	// add the numbers to the board
	var pos = 0;
	for ( var r = 0; r < board.length; ++r )
	{
		for ( var c = 0; c < board[r].length; ++c )
		{
			if (numbers[ pos ] != 0 )
				board[ r ][ c ].innerHTML = numbers[ pos ];
			else
				board[ r ][ c ].innerHTML = "";
			++pos;
		}
	}
}


function playGame(row, col)
{
	var number = board[ row ][ col ];
	var top = row - 1;
	var bottom = row + 1;
	var left = col - 1;
	var right = col + 1;
   
	if ( top != -1 && board[ top ][ col ].innerHTML == "")
	{
		board[ top ][ col ].innerHTML = board[ row ][ col ].innerHTML;
		board[ row ][ col ].innerHTML = "";
		document.getElementById("status").innerHTML = "Game Status: continue";
	}
	
	else if ( bottom != 4 && board[ bottom ][ col ].innerHTML == "")
	{
		board[ bottom ][ col ].innerHTML = board[ row ][ col ].innerHTML;
		board[ row ][ col ].innerHTML = "";
		document.getElementById("status").innerHTML = "Game Status: continue";
	}
	
	else if ( right != 4 && board[ row ][ right ].innerHTML == "")
	{
		board[ row ][ right ].innerHTML = board[ row ][ col ].innerHTML;
		board[ row ][ col ].innerHTML = "";
		document.getElementById("status").innerHTML = "Game Status: continue";
	}
	
	else if ( left != -1 && board[ row ][ left ].innerHTML == ""){
		board[ row ][ left ].innerHTML = board[ row ][ col ].innerHTML;
		board[ row ][ col ].innerHTML = "";
		document.getElementById("status").innerHTML = "Game Status: continue";
	}
	
	else
	{
		// alert illegal moves
		document.getElementById("status").innerHTML = "Game Status: invalid click";
		alert( "Click a tile that is not adjacent to the empty slot is invalid!");
	}
}

function checkStatus()
{

	var gameFinished = true;
   
	/* check if the player is win */
	for ( var i = 0; i < 4; i++ )
	{
		for ( var j = 0; j < 4; j++ )
		{
			if ( !( board[ i ][ j ].innerHTML == i*4 + j + 1 ) )
			{
				if ( !( i == 3 && j == 3 ) )
				{
					gameFinished = false;
				}
			}
		}
	}

    /* prompt for new game */
	if ( gameFinished == true )
	{
		var input = window.prompt( "Do you want to play again?(enter yes or no)", "yes" );
		if ( input != null )
		{
			if ( input )
			{
				document.getElementById("status").innerHTML = "Game Status: You Win! Start a new game";
				new_game();
			}
			else
			{
				document.getElementById("status").innerHTML = "Game Status: You Win! Game ended";
			}
		}
	}
	
	else
	{
        document.getElementById("status").innerHTML = "Status: You did not win, game continue";
	}
}

window.addEventListener( "load", start, false );