//Program detailing how to get to the grocery store

//Directions
//Object of strings

var directions = {
        step1:"Go east on route 2",
        step2:"Turn right",
        step3:"Go west on Route 7"
};

//Gas
//Number between 0 (empty) and 1 (full)
var gas = .3;

//Keys is a boolean, true or false
var keys = true;

//Speed can't exceed limit
var speed = 25;
var speedOk = function (speedlimit) {
    if (speed <= speedlimit) {
        return true
    }
};

//Cash is a number, must be greater than 0
var wallet = 25;

//Check list
function grocerystore() {
    //Print directions
    console.log("First " + directions["step1"] + ". Then " + directions["step2"] + ". Finally " + directions['step3'] + ".")
    
    // Check that you have everything
    if(gas >= .25 && keys === true && speedOk === true && wallet >= 0) {
        return true
    } else {
        console.log("You either don't have your keys or your wallet, or you're going too fast.")
    }
    
};

grocerystore();