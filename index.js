const nav= document.getElementById("navbar");
document.addEventListener("touchend",revisar)
document.addEventListener("scroll",revisar)


function revisar(){
  console.log(window.pageYOffset)
  if(window.pageYOffset>900){
   nav.style.background="black"
    
 }
 if(window.pageYOffset<900){
    nav.style.removeProperty("background")
  console.log("trasparent")
 }
     
  
}