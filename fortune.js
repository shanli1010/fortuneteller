function fortune(name){
  var fortune_output = name + ", you are going to marry a ";
    fortune_output += fortune_zodiacs[Math.floor(Math.random() * fortune_zodiacs.length)];
    text.innerText = fortune_output;

    console.log(innerText);

    // var randomFont = Math.random() * name.length;
    // var randomFont2 = Math.random() * name.length;
    // var randomFont3 = Math.random() * name.length;
    // text.style.fontSize = (randomFont+randomFont2+randomFont3);
  }
