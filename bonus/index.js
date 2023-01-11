import { Item } from './item.js';



window.addEventListener("DOMContentLoaded", function(){
    
   let button = document.getElementById("button");
   
   let textInput = document.getElementById("input");
   
  
   
   console.log(button , textInput)
  button.addEventListener('click', function(){
       
       
     let objet =  new Item (textInput.value)
     
     objet.addToHtml()
     objet.clearInput()
     
  })
   
});