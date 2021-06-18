var input;
var result;

function start()
{
   input = document.getElementById("input");
   result = document.getElementById("result");
   document.getElementById("translate_button").addEventListener("click", pigLatin, false);
} 

function pigLatin()
{
   //tokenize the phrase
   var tokens = input.value.toLowerCase().split(" ");

   for (var i in tokens) {
      printLatinWord(tokens[ i ]);
   }

    result.value += "\n";  
} 

//displays each pig Latin word
function printLatinWord(word)
{
   //place the first letter of the English word at the end of the word and add “ay”
   var translated = word.substring( 1, word.length ) + word.charAt( 0 ) + "ay";
   result.value += translated + " ";
}

window.addEventListener( "load", start, false );



