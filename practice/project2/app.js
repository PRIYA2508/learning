let pbtm = document.querySelector( "#pbtm" );
let timer = document.querySelector("#time");
let hit = document.querySelector("#hit");
let scorecount = document.querySelector( "#score" ) ;
let clicked = document.querySelector( ".bubble" );


//function to make bubble 
function makebubble(){
    for(let i=0 ; i<=107 ; i++){
        let rn = Math.floor(Math.random()*10);
      pbtm.innerHTML += `<div class="bubble">${rn}</div>`;  
    }
};

//function to make countdown from 60s to 0
let timeleft = 60;
function startTimer(){
   let timeint= setInterval(function(){
        if(timeleft  > 0){
        timeleft--;
        timer.textContent = timeleft ;
        }
        else{
           clearInterval(timeint);          
        }
    },1000);
}; 

//function to make hit
let rn 
function getNewhit(){
    rn = Math.floor(Math.random()*10);
    hit.textContent = rn ;
  
};

//function for score increasing
var score = 0; 
function scoreinc(){
   score += 10;
   scorecount.textContent = score;
};




//add event listener on click of the bubbles
pbtm.addEventListener("click", function (e) {
    if(e.target.classList.contains( "bubble")){
        let id = e.target.textContent;
        if(id == rn)
        scoreinc();
    
    e.target.remove();
    }

});
makebubble();   //call the function to generate bubbles
startTimer();   //call the function to start the count down
getNewhit();    //generate a new random number each second
// scoreinc();     //add points to the player's score
newgame();
