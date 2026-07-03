let boxes = document.querySelectorAll(".box");
let container = document.querySelector(".container")
let winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];
let newGame = document.querySelector(".new-game");
let reset = document.querySelector(".reset");
let result = document.querySelector(".result");

let turnO = true;

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerHTML = "<p>O</p>";
            box.classList.add("symbol");
            box.disabled = true;
            turnO = false;
        } else {
            box.innerHTML = "<p>X</p>";
            box.classList.add("symbol");
            box.disabled = true;
            turnO = true;
        }

        checkWinner();
    });
});

const msg = (val)=>{
    result.innerText = `Winner is ${val}`;
            result.style.fontSize = "2em";
            result.style.fontWeight = "bold";
            result.style.color = "blue";
};
const checkWinner = ()=>{
for (let pattern of winPattern) {
    let val1 = boxes[pattern[0]].innerText;
    let val2 = boxes[pattern[1]].innerText;
    let val3 = boxes[pattern[2]].innerText;
    if (val1 !== "" && val2 !== "" && val3 !== "") {

        if (val1 === val2 && val2 === val3) {
            boxes.forEach((box)=>{
                box.disabled = true;
            box.style.display = "none";
            });
            reset.style.display = "none";
            msg(val1);
        }
    }

}

};

newGame.addEventListener("click", ()=>{
    boxes.forEach((box)=>{
        box.innerHTML = "";
        box.disabled = false;
        box.style.display = "block";
    });
    result.innerText = "";
    reset.style.display = "block";
});

reset.addEventListener("click",()=>{
    boxes.forEach((box)=>{
        box.innerHTML = "";
        box.disabled = false;
    });
    
})