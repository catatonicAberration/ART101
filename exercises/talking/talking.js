//A says
let messagesA=["How are you doing?","Oh.","Is there anything I can do to help. :)"];

//B
let messagesB=["I am dying in real life.","I hate it here. I hate this bullshit. Fuck this stupid website and its stupid background.","How did you say that with your mouth?"];

let counter = 0

let turnA = true
//when A is clicked
$("#character-a").click(function(){
    if (turnA){
        $("#chat").append("<p>A: " + messagesA[counter] + "</p>");
        turnA = false;
    }
});

$("#character-b").click(function(){
    if (!turnA){
        $("#chat").append("<p>B: " + messagesB[counter] + "</p>");
        counter ++;
        turnA = true;
    }
});