var fortuneButton;
var fortuneInput;
var fortuneOutput;

var fortune_zodiacs = ["Aries","Taurus","Gemini","Cancer","Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"]
var fonts = ["center", "left", "right"]

document.addEventListener("DOMContentLoaded", function(){

  fortuneButton = document.getElementById("fortune-button");
  fortuneInput = document.getElementById("fortune-input");
  fortuneOutput = document.getElementById("fortune-output");

  fortuneButton.addEventListener("click", function(e){
    console.log("The mouse is at: " + e.clientY + " / " + e.clientX);
    var currentFortuneInput = fortuneInput.value;
    fortune(currentFortuneInput);
  });

});

function fortune(name){
  var fortuneOutputString = name + ", you are going to marry a ";
    fortuneOutputString += fortune_zodiacs[Math.floor(Math.random() * fortune_zodiacs.length)];
    fortuneOutput.innerText = fortuneOutputString;

    console.log(fortuneOutputString);

    restyle();

}

  function restyle(){

    var randomFontR = Math.random() * 255;
    var randomFontG = Math.random() * 255;
    var randomFontB = Math.random() * 255;
    var randomFontString = "rgb(" + randomFontR + "," + randomFontG + "," + randomFontB + ")";
    fortuneOutput.style.color = randomFontString;

    var fontSize = Math.random() * (80-30) + 30;
    var randomFontSize = fontSize + "px";
    fortuneOutput.style.fontSize = randomFontSize;

    var randomFont = fonts.index[(Math.random() * 2)];

    fortuneOutput.style.textAlign = randomFont;
}
