let place = {
    name: [
        "ocean",
        "fields",
        "frost",
        "city",
    ],
    description: [
        "<h2> We find ourselves at a seaside baked in perpetual sunset. The vast coral reef extends out even beyond the tide's crashing waves. Branching polyp structures and crinoid stalks reach upwards into the orange sky. Beneath the waves, there is a vast world, teeming with life, and it extends down far deeper than you can ever possibly imagine.</h2>",
        "<h2> We stand in a vast field. There is very little to be seen here other than miles and miles of crimson grass underneath the midnight sky. There is a cool, light breeze here. If you stand very still and listen closely, you can almost hear a faint whistling...</h2>",
        "<h2> It's cold here. A vast expance of jagged ice covered in a thick layer of frost extends outwards all around us. It crunches under your feet with each step. Every so often, metal rods can be seen jutting out of the ground, and a quiet buzzing can be heard in the distance. The sky is blood red. </h2>",
        "<h2> A bustling city, full of life. Overpasses twist and wrap around eachother like tangled yarn. As far as you can see there are buildings stacked ontop of buildings on top of buildings. It's hard to tell if you're ever truly on the ground floor of this urban labyrinth for the city extends just as far below you as it does above. </h2>"
    ],
    color: [ 
        "coral",
        "crimson",
        "lightsteelblue",
        "mediumspringgreen",
    ],
    background: [
        "rgb(68, 0, 26, 0.582)",
        "rgb(46, 0, 59, 0.582)",
        "rgb(66, 0, 0, 0.582)",
        "rgb(9, 0, 51, 0.582)"
    ],
};

let counter = 0;

let lstMax = place.name.length - 1;

console.log(lstMax);

let lstMin=0;

let indexMem = -1;

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
};

$("#randbutton").click(function(){
    
    let index = getRndInteger(lstMin,lstMax);

    while (index == indexMem){
        index = getRndInteger(lstMin,lstMax);
    };

    console.log(place.name[index]);
    console.log(index);
    console.log(indexMem);

    $("#randbutton").css("border", "double " + place.color[index] + " 5px");
    $("#randbutton").css("color", place.color[index]);

    $(".belowzone").css("background", place.background[index]);
    $(".belowzone").css("border", "solid " + place.color[index] + " 5px");

    $(".mlog").html(place.description[index]);
    $(".mlog").css("border", "double " + place.color[index] + " 5px");
    $("h2").css("color", place.color[index]);

    indexMem = index;

});