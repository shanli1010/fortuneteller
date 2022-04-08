function restyle(){
  var red = Math.random() * 255;
  var green = Math.random() * 255;
  var blue = Math.random() * 255;
  var outputColorString = "rgb(" + red + "," + green + "," + blue + ")";
  fortuneOutput.style.backgroundColor = outputColorString;
  text.style.fontSize = (Math.random() * (30 - 10) + 10) + "px";
  text.style.padding = (Math.random() * (50 - 10) + 10) + "px";

}
