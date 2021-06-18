var t; //position for tortoise 
var h; //position for hare
var racing_status; 

function start()
{
   document.getElementById( "race_button" ).addEventListener( "click", race, false );
} 

function race()
{
    var time = 0;
    t = 1; //position for tortoise 
    h = 1; //position for hare
    racing_status = " "; 
    racing_status += "<p>ON YOUR MARK, GET SET</p>"
    racing_status += "<p>BANG!!!</p>"; 
    racing_status += "<p>AND THEY’RE OFF!!!</p>";

   while (t < 70 && h < 70)
   {
       //generate the possibility   
        var chance = parseInt(1 + Math.random() * 10);

        //tortoise
        if (chance >= 1 && chance <= 5)
		{
            t += 3;
		}
        else if (chance >= 6 && chance <= 7)
		{
            t -= 6;
		}
        else
		{			
            ++t;
		}   
    
        if (t < 1)
		{
            t = 1;
		}
        else if(t > 70)
		{
            t = 70;
		}

        //hare
        if (chance >= 3 && chance <= 4)
		{			
            h += 9;
		}
        else if (chance == 5)
		{			
            h -= 12;
		}
        else if (chance >= 6 && chance <= 8)
		{			
            ++h;
		}
        else if (chance > 8)
		{
            h -= 2;
		}

        if (h < 1)
		{
            h = 1;
		}
        else if(h > 70)
		{
            h = 70;
		}

        //print the status
        racing_status += "<pre>";
        for (var i = 1; i <= 70; i++)
		{ 
            if (i == h && i == t)
			{
				racing_status += "OUCH!!!";
			}
            else if (i == h)
			{
				racing_status += 'H';
			}
            else if (i == t)
			{
				racing_status += 'T';
			}
            else
			{				
				racing_status += ' ';
			}
        } 
        racing_status += "</pre>";
        ++time;
   }


   //print the result 
    if (t > h)
	{
      racing_status += "<p>TORTOISE WINS!!! YAY!!!</p>";
	}
    else if (t < h)
	{
      racing_status += "<p>HARE WINS. YUCK!</p>";
	}
    else
	{
        racing_status += "<p>IT’S A TIE</p>";
    }

    //print time
   racing_status += "<p>time elapsed : " + time + "</p>";
   document.getElementById("status").innerHTML = racing_status;
} 

window.addEventListener( "load", start, false );
