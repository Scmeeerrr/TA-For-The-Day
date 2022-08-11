/**
 * This student is trying to have the text switch betwwen upper case
 * and lower case each time the user clicks the "Toggle Upper Case"
 * button. For some reason they get a type error in their on click
 * function. How should they proceed?
 */

 let caseButton  = document.getElementById("case-button")
 let divs = document.getElementsByClassName("pic-divs")
 let paragraphs = document.querySelectorAll("p")
 let isUpperCase = true
 
 caseButton.onclick = function(){
     if(isUpperCase){
         paragraphs.innerHTML = paragraphs.innerHTML.toLowerCase()
         isUpperCase = false
     }
     else{
         paragraphs.innerHTML = paragraphs.innerHTML.toUpperCase()
         isUpperCase = true
     }
 }

