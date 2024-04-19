let boxes = document.querySelectorAll('.box');
let reset = document.querySelector( '#reset-btn' );
let newGamebtn = document.querySelector( '#new-btn' ) ;
let msgContainer = document.querySelector('.msg-container');
let msg = document.querySelector('#msg');
let main = document.querySelector('.board-container')


//track for which player is playing
let turnO = true;

//store win situtation
const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8], 
    [0,3,6],
    [1,4,7],
    [2,5,8],  
    [0,4,8],
    [2,4,6]
];

//make a function for restart the game 
const restGame = () => {
 turnO = true;
 //call enableboxes function
 enableBoxes();
 //clear message container
 msgContainer.classList.add('hid');

};

//event listener on  each box
//we have to click each box that's why we have to make forEach loop

boxes.forEach((box)=>{
    //add event listner when the box clicked
    box.addEventListener('click',()=>{
    let current = box.style.backgroundColor;

    // if(current=='red'  ){
    // box.style.backgroundColor = 'white';  
    // }
    // else{
    // box.style.backgroundColor = 'red';
    // box.innerText = 'abcd'
    // } 

    if(turnO){
        box.style.backgroundColor='red';
        box.style.color = 'white';
        box.innerText= "0";
        turnO = false;
    }
    else{
        box.style.backgroundColor="black";
        box.style.color = 'white';
        box.innerText="X"
        turnO =true;
    }
    box.disabled = true;

    //check for winner
    checkWinner()
     });  
});
//function for dispaly for winner
const showWinner =(winner) =>{
    msg.innerText = `Player ${winner} wins!`;
    msgContainer.classList.remove( "hid"); 
};

//function for disable the buttons after getting a winner  or tie
const disable = () =>{
    for(let box of boxes){
        box.disabled = true;
        if(box.innerText == ''){
        box.style.backgroundColor='white';
    }
}
};

//function for while we play new game all the buttons  are enabled
const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
        box.style.backgroundColor='white';
}
};

const checkDraw = () => {
    let filledBoxes = 0;
    for (let box of boxes) {
        if (box.innerText !== '') {
            filledBoxes++;
        }
    }
    if (filledBoxes === 9) {
        msg.innerText = "It's a draw!";
        msgContainer.classList.remove("hid");
        disable();
    }
};


const checkWinner  = () => { 
    for(let  pattern of winPatterns){

        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
    
    if(pos1val != "" && pos2val != "" && pos3val !=""){
        if(pos1val === pos2val && pos2val === pos3val){
            showWinner(pos1val);
            disable();
        } 
    }
}
checkDraw()   //calling function to check whether it is a draw or not
};

//add event listener to new-btn and reset-btn

newGamebtn.addEventListener("click",restGame) ;
reset.addEventListener("click",restGame);



