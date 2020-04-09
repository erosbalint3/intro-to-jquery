let color = "purple";
let number = 10;
let word = "cool";
if(color == "purple"){
    $(".red").css("background-color", color);
}
if(number > 100){
    $(".yellow").text("whoah, that's a big number.");
}
else{
    $(".yellow").text("Just a regular number, please.");
}
if(word == "cool"){
    $(".blue").text("Power of DOM");
}
else{
    $(".purple").text("Power of DOM");
}