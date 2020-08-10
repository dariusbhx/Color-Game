var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.getElementById("easyBtn");
var hardBtn = document.querySelector("#hardBtn");


easyBtn.addEventListener("click", function(){
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    colors = generateRandomColors(3);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    // this loop removes the bottom 3 colors
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }    
})

hardBtn.addEventListener("click", function(){
    easyBtn.classList.remove("selected")
    hardBtn.classList.add("selected")
    for(var i = 0; i < squares.length; i++){
            squares[i].style.background = colors[i];
            squares[i].style.display = "none";
    }    
})


resetButton.addEventListener("click", function(){
    colors = generateRandomColors(6);
    //generate all new colors
    pickedColor = pickColor();
    //pick a new random color from array
    colorDisplay.textContent= pickedColor;
    //change colors of squares
    for(var i = 0; i < squares.length; i++){
        squares[i].style.background = colors[i];
    }
    h1.style.background = "#232323"
})

colorDisplay.textContent = pickedColor;

for( var i = 0; i < squares.length; i++){
    //add initial colors to squares
    squares[i].style.background = colors[i];
    //addclick listeners
    squares[i].addEventListener("click", function(){
    //compare if the color is syon
    var clickedColor = this.style.background;
    if(clickedColor === pickedColor){
        messageDisplay.textContent = "correct";
        resetButton.textContent= "play again"
        changeColors(clickedColor); 
        h1.style.background = clickedColor
    } else{
        this.style.background = "#232323";
        messageDisplay.textContent= "try again"
    }
    });
}


function changeColors(color){
    // loop through all squares
    for(var i = 0; i < squares.length; i++){
        squares[i].style.background = color;
    }
}

function pickColor(){
  var random = Math.floor(Math.random() * colors.length)
  return colors[random];
}

function generateRandomColors(num){
    //make an array
    var arr =[]
    //add num random colors to array
    for(var i = 0; i < num; i++){
        arr.push(randomColor())
        //get random color and push into array
    }
    //return that array
    return arr;
}

function randomColor(){
    //pick a red 
    var r = Math.floor(Math.random() * 256);
    //pick a green
    var g = Math.floor(Math.random() * 256);
    //pick a blue
    var b  = Math.floor(Math.random() * 256);
    return "rgb(" + r +", "+ g+", "+ b +")";
}

