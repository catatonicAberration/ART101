let place = {
    name: [
        "Ocean",
        "Fields",
        "Frost",
        "City",
    ],
    description: [
        "<h2> We find ourselves at a seaside baked in perpetual sunset. The vast coral <em>reef</em> extends out even beyond the tide's crashing waves. Branching polyp structures and crinoid stalks reach upwards into the orange sky. Beneath the waves, there is a vast world, teeming with life, and it extends down far deeper than you can ever possibly imagine.</h2>",
        "<h2> We stand in a vast field. There is very little to be seen here other than miles and miles of crimson <em>grass</em> underneath the midnight sky. There is a cool, light breeze here. If you stand very still and listen closely, you can almost hear a faint whistling...</h2>",
        "<h2> It's cold here. A vast expance of jagged ice covered in a thick layer of <em>frost</em> extends outwards all around us. It crunches under your feet with each step. Every so often, metal rods can be seen jutting out of the ground, and a quiet buzzing can be heard in the distance. The sky is blood red. </h2>",
        "<h2> A bustling city, full of life. Overpasses twist and wrap around eachother like tangled yarn. As far as you can see there are buildings stacked ontop of buildings on top of buildings. It's hard to tell if you're ever truly on the ground floor of this <em>urban</em> labyrinth for the city extends just as far below you as it does above. </h2>"
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
    keyword: [
        "reef",
        "grass",
        "frost",
        "urban"
    ],
    backgroundimg: [
        "../images/background-beach.png",
        "../images/background-field.png",
        "../images/background-frost.png",
        "../images/background-city.png",
    ]
};

let lstMax = place.name.length - 1;

console.log(lstMax);

let lstMin=0;

let indexMem = -1;

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
};

function arrayCheck(key,array){
    let length = array.length;
    let count = 0;
    while (count != length){
        if (array[count] == key){
            return count;
        };
        count ++;
    };
    return -1;
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
    $("#choicebutton").css("border", "double " + place.color[index] + " 5px");
    $("#choicebutton").css("color", place.color[index]);

    $(".belowzone").css("background", place.background[index]);
    $(".belowzone").css("border", "solid " + place.color[index] + " 5px");

    $(".randmlog").html(place.description[index]);
    $(".randmlog").css("border", "double " + place.color[index] + " 5px");
    $(".randmlog h2").css("color", place.color[index]);

    indexMem = index;

});

$("#choicebutton").click(function(){
    let userKey = prompt("Enter keyword.");

    let index = arrayCheck(userKey,place.keyword);

    if (index != -1){
        $("#randbutton").css("border", "double " + place.color[index] + " 5px");
        $("#randbutton").css("color", place.color[index]);
        $("#choicebutton").css("border", "double " + place.color[index] + " 5px");
        $("#choicebutton").css("color", place.color[index]);

        $(".belowzone").css("background rgba(0, 0, 0, 0.582)");
        $(".belowzone").css("border", "solid " + place.color[index] + " 5px");

        $(".randmlog").html(place.description[index]);
        $(".randmlog").css("border", "double " + place.color[index] + " 5px");
        $(".randmlog h2").css("color", place.color[index]);

        $("body").css("background-image", "url("+ place.backgroundimg[index] +")")

        $("h1").css("border", "solid " + place.color[index] + " 5px");
        $("h1").css("color", place.color[index]);
        $(".mlog").css("border", "solid " + place.color[index] + " 5px");
        $(".hostplace").css("border", "solid " + place.color[index] + " 5px");
        $(".photoplace img").css("border", "solid " + place.color[index] + " 5px");
        $(".mlog h2").css("color", place.color[index]);
        $(".mlog p").css("color", place.color[index]);
        $(".mainzone").css("background", place.background[index]);
        $(".mainzone").css("border", "solid " + place.color[index] + " 5px");

        $("a").css("color", place.color[index]);
    }
    else{
        $("#randbutton").css("border", "double white 5px");
        $("#randbutton").css("color", "white");
        $("#choicebutton").css("border", "double white 5px");
        $("#choicebutton").css("color", "white");

        $(".belowzone").css("background", " rgba(0, 0, 0, 0.582)");
        $(".belowzone").css("border", "solid white 5px");

        $(".randmlog").html("<h2>Invalid input.</h2>");
        $(".randmlog").css("border", "double white 5px");
        $(".randmlog h2").css("color", "white");

        $("body").css("background-image", "url(../images/background.png)")

        $("h1").css("border", "solid white 5px");
        $("h1").css("color", "white");
        $(".mlog").css("border", "solid white 5px");
        $(".hostplace").css("border", "solid white 5px");
        $(".photoplace img").css("border", "solid white 5px");
        $(".mlog h2").css("color", "white");
        $(".mlog p").css("color", "white");
        $(".mainzone").css("background rgba(0, 0, 0, 0.582)");
        $(".mainzone").css("border", "solid white 5px");

        $("a").css("color", "white");
    }

});

$(".color-circle").click(function(){

    console.log(this.id);

    let index = arrayCheck(this.id,place.name);

    if (index != -1){
        $("#randbutton").css("border", "double " + place.color[index] + " 5px");
        $("#randbutton").css("color", place.color[index]);
        $("#choicebutton").css("border", "double " + place.color[index] + " 5px");
        $("#choicebutton").css("color", place.color[index]);

        $(".belowzone").css("background rgba(0, 0, 0, 0.582)");
        $(".belowzone").css("border", "solid " + place.color[index] + " 5px");

        $(".randmlog").html(place.description[index]);
        $(".randmlog").css("border", "double " + place.color[index] + " 5px");
        $(".randmlog h2").css("color", place.color[index]);

        $("body").css("background-image", "url("+ place.backgroundimg[index] +")")

        $("h1").css("border", "solid " + place.color[index] + " 5px");
        $("h1").css("color", place.color[index]);
        $(".mlog").css("border", "solid " + place.color[index] + " 5px");
        $(".hostplace").css("border", "solid " + place.color[index] + " 5px");
        $(".photoplace img").css("border", "solid " + place.color[index] + " 5px");
        $(".mlog h2").css("color", place.color[index]);
        $(".mlog p").css("color", place.color[index]);
        $(".mainzone").css("background", place.background[index]);
        $(".mainzone").css("border", "solid " + place.color[index] + " 5px");

        $("a").css("color", place.color[index]);
    }
    else{
        $("#randbutton").css("border", "double white 5px");
        $("#randbutton").css("color", "white");
        $("#choicebutton").css("border", "double white 5px");
        $("#choicebutton").css("color", "white");

        $(".belowzone").css("background", " rgba(0, 0, 0, 0.582)");
        $(".belowzone").css("border", "solid white 5px");

        $(".randmlog").html("<h2>Let's see where fate takes us.</h2>");
        $(".randmlog").css("border", "double white 5px");
        $(".randmlog h2").css("color", "white");

        $("body").css("background-image", "url(../images/background.png)")

        $("h1").css("border", "solid white 5px");
        $("h1").css("color", "white");
        $(".mlog").css("border", "solid white 5px");
        $(".hostplace").css("border", "solid white 5px");
        $(".photoplace img").css("border", "solid white 5px");
        $(".mlog h2").css("color", "white");
        $(".mlog p").css("color", "white");
        $(".mainzone").css("background rgba(0, 0, 0, 0.582)");
        $(".mainzone").css("border", "solid white 5px");

        $("a").css("color", "white");
    }

});