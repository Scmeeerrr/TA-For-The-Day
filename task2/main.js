/*
 * This student is trying to change the color of both divs 
 * to somthing random each time the user clicks the mouse, but it
 * seems that they have a few errors. What should they do to fix them?
 */

/* SOLUTION: There were a few syntax errors when creating the variables;
missing parentheses, quotation marks, etc. In the onclick function, `` had to be used
when using variables in strings with this method. Also, the randNum function did not
return the value after using the parameter (max)
*/


let div1 = document.querySelector("#div1")
let div2 = document.querySelector("#div2")
let body = document.querySelector("body")

body.onclick = function() {
    div1.style.backgroundColor = `rgb(${randNum(256)} , ${randNum(256)}, ${randNum(256)})`
    div2.style.backgroundColor = `rgb(${randNum(256)} , ${randNum(256)}, ${randNum(256)})`
}

function randNum(max){
    return Math.floor(Math.random() * (max + 1));
}