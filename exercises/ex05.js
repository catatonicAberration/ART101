// the clicker button program


let counter = 0;

let color = 0

let colors = ["gold","aqua","green","yellow","purple","blue","orange","pink"]

let colorLength = colors.length;

function paintPage(color="magenta"){
    $("body").css("background-color",color);
}


$("#needy-button").click(function(){ 
    //what to do when the button is clicked
    counter += 1;
    color += 1;

    if (color > colorLength){
        color = 1
    }

    if (counter == 1){
        $("#needy-button").html("<strong>I was clicked <em>" + counter + "</em> time and color is " + colors[color - 1] + "</strong>");
    }
    else if (counter >= 100){
        $("#needy-button").html("<strong>Wow! I was clicked <em>" + counter + "</em> times and color is " + colors[color - 1] + "</strong>");
    }
    else{
        $("#needy-button").html("<strong>I was clicked <em>" + counter + "</em> times and color is " + colors[color - 1] + "</strong>");
    };

    $("#needy-button").css("border", "solid " + colors[color-1] + " 5px");
    $("#needy-button").css("color", colors[color-1]);
    paintPage(colors[color-1]);


});

$("#green").click(function(){
    
    console.log("green was clicked");
    paintPage("green");

});

$("#orange").click(function(){
    
    console.log("orange was clicked");
    paintPage("orange");

});

$("#pink").click(function(){
    
    console.log("pink was clicked");
    paintPage("pink");

});