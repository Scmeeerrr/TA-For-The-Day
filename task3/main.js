/**
 * This student is trying to have the text switch betwwen upper case
 * and lower case each time the user clicks the "Toggle Upper Case"
 * button. For some reason they get a type error in their on click
 * function. How should they proceed?
 */

/* SOLUTION: Since the program kept calling paragraphs.innerHTML undefined, I decided to make a for loop.
Therefore, each element of the array pararagraphs would become lower case or upper case whenever
the user clicked on the button. 
*/

 let caseButton  = document.getElementById("case-button")
 let divs = document.getElementsByClassName("pic-divs")
 let paragraphs = document.querySelectorAll("p")
 let isUpperCase = true
 
 caseButton.onclick = function(){
     if(isUpperCase){
        for (i = 0; i < paragraphs.length; i++) {
            paragraphs[i].innerHTML = paragraphs[i].innerHTML.toLowerCase(); 
        }
        isUpperCase = false
     }
     else{
        for (i = 0; i < paragraphs.length; i++) {
            paragraphs[i].innerHTML = paragraphs[i].innerHTML.toUpperCase(); 
        }
        isUpperCase = true
     }
 }
