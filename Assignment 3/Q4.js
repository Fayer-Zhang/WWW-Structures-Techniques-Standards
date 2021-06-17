function start()
{
	var arr = new Array(1000);
	
	//initialized to 1 (true)
	for(var i=1; i<1000; ++i)
	{
		arr[i] = 1;
	}
	
	var prime = SieveEratosthenes(arr);
	document.getElementById( "primeArr" ).innerHTML = prime.toString();
	
}

function SieveEratosthenes(array)
{
	var primeArr = new Array();
	
	for(var i=2; i*i<1000; ++i)
	{
		if(array[i] == 1)
		{
			for(var j = i * i; j<1000; j+=i)
			{
				array[j] = 0;
			}
		}
	}
	
	for(var i = 2; i<1000; i++)
	{
		if(array[i] == 1)
		{
			primeArr.push(i);
		}
	}
	
	return primeArr;
}

window.addEventListener( "load", start, false );
