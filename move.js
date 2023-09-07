var element = null;
function start() {
    element = document.getElementById("flue");
    element.style.position = "relative";
    element.style.left = (innerWidth/2)+"px";
    element.style.top = (innerHeight/2)+"px";
}

function testmove(hendelse) {   
    var tastetrykk = hendelse.which || hendelse.keyCode;
    switch (tastetrykk) {
        case 37:
            moveleft();
            break;
        case 38:
            moveup();
            break;
        case 39:
            moveright();
            break;
        case 40:
            movedown();
            break;
    }
}

function moveleft(){
    var bilde = document.getElementById("flue");
    bilde.src = "flue_left.png";
    element.style.left = parseInt(element.style.left)-5+"px"
}

function moveright(){
    var bilde = document.getElementById("flue");
    bilde.src = "flue_right.png";
    element.style.left = parseInt(element.style.left)+5+"px"
}

function movedown(){
    var bilde = document.getElementById("flue");
    bilde.src = "flue_down.png";
    element.style.top = parseInt(element.style.top)+5+"px"
}

function moveup() {
    var bilde = document.getElementById("flue");
    bilde.src = "flue_up.png";
    element.style.top = parseInt(element.style.top)-5+"px"
}

window.onload = start;