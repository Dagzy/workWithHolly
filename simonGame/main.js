var colorArray = ["blue", "red", "yellow", "green"];
var previousColors = [];
let sequence;
let i = 0;
let colorDiv = document.getElementById("colorOutput");
function nextSequence(){
    var randomNumber = Math.floor(Math.random()*4);
    return randomNumber;
}
function playGame(){
    var randomNumber = nextSequence();
    //It doesn't matter that we called the variable randomNumber, it just makes sense to name it that, since that's what nextSequence() returns; Don't forget function calls are just placeholders for whatever value they will return! :D
    var randomColor = colorArray[randomNumber];
    previousColors.push(randomColor);
    showSequence();
    printSequence();
}
function showSequence(){
    if(sequence){
        clearInterval(sequence)
        i = 0;
    }
    sequence = setInterval(function(){
        colorDiv.style.backgroundColor = "";        
        if(i < previousColors.length){
            colorDiv.style.backgroundColor = previousColors[i];
            i++;
        }else{
            clearInterval(sequence);
            i = 0;
        }
    },1000)
}

function printSequence(){
    console.log("--------------------------------NEW SEQUENCE-----------------------------");
    for (let i = 0; i < previousColors.length; i++) {
        console.log(previousColors[i])
    }    
}