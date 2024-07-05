let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let result = document.querySelector(".result");
let newBtn = document.querySelector(".newBtn");
let hide = document.querySelector(".hide");
let btn = document.querySelector("#box1");

let turnO = true;

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO === true) {
            box.classList.remove("X");
            box.innerText = "O";
            turnO = false;
        }
        else {
            box.classList.add("X");
            box.innerText = "X";
            turnO = true;

        }
        box.disabled = true;
        checkDraw();
        checkWinner();

    })
});


//Program to check and show winner ---->>>

const winPatterns = [
    [0, 1, 2],            //2D Arrys
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                showWinner(pos1Val);


            }
        }
    }
}

const showWinner = (winner) => {
    result.innerText = `the winner is ${winner}`;
    hide.classList.remove("hide");
    disableBoxes();
}
//<<<----

//program to reset game

const resetGame = () => {
    turnO = true;
    enableBoxes();
    hide.classList.add("hide");
}

const disableBoxes = () => {
    for (box of boxes) {
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for (box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

newBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);

// Program to check and show draw ---->>>

let drawPatterns = [0, 1, 2, 3, 4, 5, 6, 7, 8];

const checkDraw = () => {

    let box0 = boxes[drawPatterns[0]];
    let box1 = boxes[drawPatterns[1]];
    let box2 = boxes[drawPatterns[2]];
    let box3 = boxes[drawPatterns[3]];
    let box4 = boxes[drawPatterns[4]];
    let box5 = boxes[drawPatterns[5]];
    let box6 = boxes[drawPatterns[6]];
    let box7 = boxes[drawPatterns[7]];
    let box8 = boxes[drawPatterns[8]];

    if (box0.disabled === true && box1.disabled === true && box2.disabled === true && box3.disabled === true && box4.disabled === true && box5.disabled === true && box6.disabled === true && box7.disabled === true && box8.disabled === true) {
        showDraw()
    }
}

  const showDraw = () => {
    result.innerText = "Game is Draw";
    hide.classList.remove("hide")
  }

  //<<<----