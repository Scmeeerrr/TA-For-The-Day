/*
 * This student is trying to change the color of div1 
 * each time the user clicks on it, but for some reason
 * he just keeps getting an error. What can he do to fix
 * this?
 */

// SOLUTION: On line 17, green was written without "", making the program seem it was a variable.


let div1 = document.querySelector("#div1")
div1.style.backgroundColor = "green"
let div2 = document.querySelector("#div2")
div2.style.backgroundColor = "red"

div1.onclick = function() {
    if(div1.style.backgroundColor == "green"){
        div1.style.backgroundColor = "red"
    }
    else{
        div1.style.backgroundColor = "green"
    }
}
