


var botcount = 2, bottext = "bottles", outtext = "";
output = document.getElementById('output');


while (botcount > 0) {
if (botcount == 1) {
    bottext = "bottle";
}

outtext += botcount + " " + bottext + " of beer on the wall, "+ botcount + " " + bottext + " of beer.<br>";

   
botcount--;
outtext += "Take one down and pass it around, " + botcount + " bottles of beer on the wall.<hr>"

document.write(outtext);

if (botcount == 0) {
    bottext = "no more";
}

outtext = '';
}

document.write("No more bottles of beer on the wall, no more bottles of beer.  Go to the store and buy some more, 99 bottles of beer on the wall.");




