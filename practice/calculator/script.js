const display = document.querySelector('#inputbox');
const buttons =  document.querySelectorAll('button');

let string = " ";
let arr = Array.from(buttons);
arr.forEach(function(but){
    but.addEventListener('click',function(e){
     if(e.target.innerHTML == "="){
        string = eval(string);
        display.value = string;
     }
     else if(e.target.innerHTML == "AC"){
        string = "";
        display.value = string;
     }
     else if(e.target.innerHTML == "DE"){
      string = string.substring(0, string.length-1);
      display.value = string;
     }
     else{
        string += e.target.innerHTML;
        display.value = string;
    }
    

     
    })
})
