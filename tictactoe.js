
var active = Math.round(Math.random());

var activep1;
var counter=0;
$("#displayresult").hide();
if(active === 0){
activep1=true;
$("#p1").css({"background-color":"gray","color":"orangered"});
}
else{
    activep1=false;
    $("#p2").css({"background-color":"gray","color":"orangered"});
}
$("#a").click(clkd);
$("#b").click(clkd);
$("#c").click(clkd);
$("#d").click(clkd);
$("#e").click(clkd);
$("#f").click(clkd);
$("#g").click(clkd);
$("#h").click(clkd);
$("#i").click(clkd);
function clkd(){
    counter++;
    $(this).off("click");
    if(activep1){
        $(this).text("X").css("color","red");
        activep1=false;
        $("#p1").css({"background-color":"mediumaquamarine","color":"blue"});
        $("#p2").css({"background-color":"gray","color":"orangered"});
        check();
 }
    else{
        $(this).text("O").css("color","green");
        activep1=true;
        $("#p2").css({"background-color":"mediumaquamarine","color":"blue"});
        $("#p1").css({"background-color":"gray","color":"orangered"});
        check();
    }
}
function check(){
    var a = $("#a").text();
var b = $("#b").text();
var c = $("#c").text();
var d = $("#d").text();
var e = $("#e").text();
var f = $("#f").text();
var g = $("#g").text();
var h = $("#h").text();
var i = $("#i").text();
if(counter===9){
    $("#playerdetail").hide();
    $("#displayresult").show();
    $("#dr").text("No one won this game !").css("color","blue");
}
{
    if(a === b && b === c){
        $("#a").css("background-color","lightgreen");
        $("#b").css("background-color","lightgreen");
        $("#c").css("background-color","lightgreen");
        display();
    }
    else if(a===d && d===g){
        $("#a").css("background-color","lightgreen");
        $("#d").css("background-color","lightgreen");
        $("#g").css("background-color","lightgreen");
        display();
    }
    else if(a===e && e===i){
        $("#a").css("background-color","lightgreen");
        $("#e").css("background-color","lightgreen");
        $("#i").css("background-color","lightgreen");
        display();
    }
    else if(b===e && e===h){
        $("#e").css("background-color","lightgreen");
        $("#b").css("background-color","lightgreen");
        $("#h").css("background-color","lightgreen");
        display();
    }
    else if(c===f && f===i){
        $("#f").css("background-color","lightgreen");
        $("#i").css("background-color","lightgreen");
        $("#c").css("background-color","lightgreen");
        display();
    }
    else if(c===e && e===g){
        $("#e").css("background-color","lightgreen");
        $("#g").css("background-color","lightgreen");
        $("#c").css("background-color","lightgreen");
        display();
    }
    else if(d===e && e===f){
        $("#d").css("background-color","lightgreen");
        $("#e").css("background-color","lightgreen");
        $("#f").css("background-color","lightgreen");
        display();
    }
    else if(g===h && h===i){
        $("#g").css("background-color","lightgreen");
        $("#h").css("background-color","lightgreen");
        $("#i").css("background-color","lightgreen");
        display();
    }
}
}
function display(){
    $("#playerdetail").hide();
    $("#displayresult").show();
    if(activep1){
    $("#dr").text("Player 2 won the game !").css("color","red");
        eventRemove();
    }
    else{
        $("#dr").text("Player 1 won the game !").css("color","red");
        eventRemove();
        }
}
function eventRemove(){
   $("#a").off("click"); 
   $("#b").off("click");
   $("#c").off("click");
   $("#d").off("click");
   $("#e").off("click");
   $("#f").off("click");
   $("#g").off("click");
   $("#h").off("click");
   $("#i").off("click");
}
