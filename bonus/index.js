import { Pizza } from './pizza.js';




window.addEventListener("DOMContentLoaded", function(){
    
   let vegie = new Pizza("veggie","tomate","fromage", "legume");
   let LaMeattie = new Pizza("La-Meattie","tomate","fromage", "viande");
   let Fishie = new Pizza("Fishie","tomate","fromage", "poisson");
    console.log(vegie);
    console.log(LaMeattie);
    console.log(Fishie)
        
});