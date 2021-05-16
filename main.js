
var valueRandom;
var value1;
var pinGenerator = document.getElementById('random-button');
pinGenerator.addEventListener('click' , function(){
    var valueRandom = Math.floor(1000 + Math.random() * 8999);
    var randomInputField = document.getElementById('random-input');
    randomInputField.value = valueRandom;
    value1 = parseInt(valueRandom);
})





var myPin;
var value2;
function dis(val)
{
myPin = document.getElementById("btn-field").value+=val
var btnInputField = document.getElementById('btn-field');
btnInputField.value = myPin;
value2 = parseInt(myPin);
 }
//function for evaluation
function solve()
{
let x = document.getElementById("btn-field").value
let y = eval(x)
document.getElementById("btn-field").value = y
}
//function for clearing the display
function clr()
{
document.getElementById("btn-field").value = ""
}




var finalSubmit = document.getElementById('submitButton');
finalSubmit.addEventListener('click', function(){
    if(value1 == value2){
        var messageOne = document.getElementById("pin-match");
        messageOne.style.display = "block";
        
    }
    else{
        var messageThree = document.getElementById("pin-mismatch");
        messageThree.style.display = "block";
        
    }
})