let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let result = document.querySelector(".result");
let newBtn = document.querySelector(".newBtn");
let hide = document.querySelector(".hide");
let btn = document.querySelector("#box1");

let turnO = true;

const winPatterns = [
     [0 , 1 , 2],            //2D Arrys
     [0 , 3 , 6],
     [0 , 4 , 8],
     [1 , 4 , 7],
     [2 , 5 , 8],
     [2 , 4 , 6],
     [3 , 4 , 5],
     [6 , 7 , 8],
];

boxes.forEach((box) => {
    box.addEventListener("click" , () => {
        console.log("box was clicked");
       if(turnO === true){
        box.classList.remove("X");
        box.innerText = "O";
        turnO = false;
       }
       else{
        box.classList.add("X");
        box.innerText = "X";
        turnO = true;

       }
       box.disabled = true;
       checkDraw();
       checkWinner();
       checkDraw();
    })
});

const disableBoxes = () => {
    for(box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for(box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}


const showWinner = (winner) => {
    result.innerText = `the winner is ${winner}`;
    hide.classList.remove("hide");
    disableBoxes();
}

const checkWinner = () => {
    for(let pattern of winPatterns){
   let pos1Val = boxes[pattern[0]].innerText ;
   let pos2Val = boxes[pattern[1]].innerText ;
   let pos3Val = boxes[pattern[2]].innerText ;
  
   if(pos1Val != "" && pos2Val != "" && pos3Val != "" ){
    if(pos1Val === pos2Val && pos2Val === pos3Val){
        console.log("winner is", pos1Val );
       showWinner(pos1Val);
       

    }
   }

    
    }

}

 const resetGame = () => {
     turnO = true;
     enableBoxes();
     hide.classList.add("hide");
     
 }
   
newBtn.addEventListener("click" , resetGame);
resetBtn.addEventListener("click" , resetGame);
