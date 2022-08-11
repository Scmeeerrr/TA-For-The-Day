/*
 * This student is trying to change the color of both divs 
 * to somthing random each time the user clicks the mouse, but it
 * seems that they have a few errors. What should they do to fix them?
 */



let div1 = document.querySelector("#div1")
let div2 = document.querySelector("#div2)
let body = document.querySelector"body"

body.onclick = function {
    div1.style.backgroundColor = "rgb(${randNum(256)} , ${randNum(256)}, ${randNum(256)})"
    div2.style.backgroundColor = "rgb(${randNum(256)} , ${randNum(256)}, ${randNum(256)})"
}

function randNum(max){
    Math.floor(Math.random() * (max + 1));
}



