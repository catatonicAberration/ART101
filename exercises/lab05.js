let lstMax = 10;

let lstMin=1;

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
};

function askNumber(whatNumber){
    let userNumber = prompt ("Guess 1-10?");

    if (userNumber == whatNumber){
        $("#output").html("You got it!");
    }
    else{
        $("#output").html("Nooooope!");
    }
}

$("#good-button").click(function(){
    let secretNumber = getRndInteger(lstMin,lstMax);
    console.log(secretNumber);
    askNumber(secretNumber);
});