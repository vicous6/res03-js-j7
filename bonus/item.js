
class Item {
    #texteValue;
   
    
    constructor(texteValue){
        
        this.#texteValue =texteValue;
        
       
    }
        get texteValue(){
            
            return this.#texteValue;
        }
       
       
         set texteValue(texteValue){
            
           this.#texteValue = texteValue;
        }
        
        addToHtml(){
            
             let ul = document.getElementById("ul")
            let elem = document.createElement('li')
            elem.textContent = this.#texteValue
    
            ul.appendChild(elem)
            
        }
        clearInput() {
            
        let input = document.getElementById("input");
        input.value = "";
    }
       
      
    
}


export { Item } ;