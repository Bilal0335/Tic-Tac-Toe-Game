let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGamebtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container")
let msg = document.querySelector("#msg")


let turn0 = true; //playerX, Player0

const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
]

const resetGame = () => {
    turn0 = true;
    msgContainer.classList.add("hide")
    enableBox();
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0) {
            //player0
            box.innerText = "O";
            box.style.color = "green"
            turn0 = false;
        }
        else {
            //playerX
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;

        checkWinner();
    });
})

const disabledBox = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}
const enableBox = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}


const shoWinner = (winner) => {
    msg.innerText = `Congratulation, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBox()
}

const checkWinner = () => {
    for (let pattern of winPattern) {
        let pos1Value = boxes[pattern[0]].innerText;
        let pos2Value = boxes[pattern[1]].innerText;
        let pos3Value = boxes[pattern[2]].innerText;

        if (pos1Value != "" && pos2Value != "" && pos3Value != "") {
            if (pos1Value === pos2Value && pos2Value === pos3Value) {
                shoWinner(pos1Value);
            }
        }
    }
}
newGamebtn.addEventListener("click", resetGame)
resetBtn.addEventListener("click", resetGame)