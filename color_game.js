console.log("hi,console user");
var numSq = 6;
var color = generateRandomColor(numSq);
var h1 = document.querySelector("h1");
var check = document.querySelector("#check");

var pickedColor = pickColor();
var msgDisplay = document.querySelector("#msg");

var colorDisplay = document.querySelector("#colorDisplay");
colorDisplay.textContent = pickedColor;

var sq = document.querySelectorAll(".square");
for (var i = 0; i < sq.length; i++) {
  //Intial color to sq
  sq[i].style.background = color[i];

  //click events
  sq[i].addEventListener("click", function () {
    //grab color of clicked sq
    var sqColor = this.style.background;

    //compare to pickedColor
    if (sqColor == pickedColor) {
      msgDisplay.textContent = "Well Done!!";
      changeSqColor();
      h1.style.background = pickedColor;
      console.log("correct");
      resetButton.textContent = "Play Again??";
      if (check.checked) {
        console.log("checkbox is checked");
        color = generateRandomColor(numSq);
        pickedColor = pickColor();
        colorDisplay.textContent = pickedColor;
        msgDisplay.textContent = "Play!!!";
        for (var i = 0; i < sq.length; i++) {
          //Intial color to sq
          sq[i].style.background = color[i];
        }
        h1.style.background = colorRandom();
        resetButton.textContent = "New Colors";
      }
    } else {
      this.style.background = "#232323";
      msgDisplay.textContent = "Try Again";
      console.log(sqColor);
      console.log(pickedColor);
    }
  });
}
function changeSqColor() {
  for (var i = 0; i < sq.length; i++) {
    sq[i].style.background = pickedColor;
  }
}
function pickColor() {
  var random = Math.floor(Math.random() * color.length);
  return color[random];
}
function generateRandomColor(n) {
  var randomColor = [];
  for (var i = 0; i < n; i++) {
    randomColor.push(colorRandom());
  }
  return randomColor;
}
function colorRandom() {
  //red
  var r = Math.floor(Math.random() * 256);
  //green
  var g = Math.floor(Math.random() * 256);
  //blue
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
var resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", function () {
  console.log("clicked reset");
  color = generateRandomColor(numSq);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  msgDisplay.textContent = "Play!!!";
  for (var i = 0; i < sq.length; i++) {
    //Intial color to sq
    sq[i].style.background = color[i];
  }
  h1.style.background = colorRandom();
  resetButton.textContent = "New Colors";
});

var easyBtn = document.querySelector("#easy");
var hardBtn = document.querySelector("#hard");

easyBtn.addEventListener("click", function () {
  console.log("clicked easy");
  easyBtn.classList.add("selected");
  hardBtn.classList.remove("selected");
  numSq = 3;
  color = generateRandomColor(numSq);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < sq.length; i++) {
    //Intial color to sq
    if (color[i]) {
      sq[i].style.background = color[i];
    } else {
      sq[i].style.display = "None";
    }
  }
  msgDisplay.textContent = "Play!!!";
  h1.style.background = "steelblue";
});

hardBtn.addEventListener("click", function () {
  console.log("clicked hard");
  hardBtn.classList.add("selected");
  easyBtn.classList.remove("selected");
  numSq = 6;
  color = generateRandomColor(numSq);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < sq.length; i++) {
    //Intial color to sq
    sq[i].style.background = color[i];
    sq[i].style.display = "block";
  }
  h1.style.background = "steelblue";
  msgDisplay.textContent = "Play!!!";
});