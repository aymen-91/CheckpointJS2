function BOLD(){
var paragraphe = document.querySelector("#test");
paragraphe.style.fontWeight ="bold"
}
function ITALIC(){
    var paragraphe = document.querySelector("#test");
    paragraphe.style.fontStyle ="italic"
    }
function UNDELINE(){
    var paragraphe = document.querySelector("#test");
    paragraphe.style.textDecoration ="underline"
        }    
    
function font(){
    var paragraphe = document.querySelector("#test") ;
    var f = document.querySelector("#fon");
  if (f.options[f.selectedIndex].value == "monospace" ) 
        paragraphe.style.fontFamily="monospace" 
   else {
       if (f.options[f.selectedIndex].value == "sans-serif" ) 
       paragraphe.style.fontFamily="sans-serif" 
   } 

            }

            function fontsize(){
                var paragraphe = document.querySelector("#test") ;
                var fs = document.querySelector("#fon-size");
                console.log(fs)
              if (fs.options[fs.selectedIndex].value == "1" ) 
                    paragraphe.style.fontSize="30px" 
               else {
                   if (fs.options[fs.selectedIndex].value == "2" ) 
                   paragraphe.style.fontSize="20px" 
               }
            
                        }  