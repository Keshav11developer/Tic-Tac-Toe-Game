let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newBtn=document.querySelector("#new-btn");
let msgCon=document.querySelector(".msg-con");
let message=document.querySelector("#msg");
let turnO=true;
const winPattern=
[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8],
    [2,4,6],
];

const resetGame = () =>{
    turnO=true;
    enableBoxes();
    msgCon.classList.add("hide");
}
boxes.forEach((box)=>{
     box.addEventListener("click",()=> {
        console.log("Box was clicked.");
        if(turnO){
            box.innerText="0";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
     });
});
const showWinner=(Winner)=>{
    message.innerText=`Congratulations,Winner is ${Winner}`;
    msgCon.classList.remove("hide");
    disableBoxes();
}

const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const checkWinner= () =>{
    for(let pattern of winPattern){
        let postion1=boxes[pattern[0]].innerText;
        let postion2=boxes[pattern[1]].innerText;
        let postion3=boxes[pattern[2]].innerText;

        if(postion1 != "" && postion2 != "" && postion3 != ""){
            if(postion1===postion2 && postion2===postion3){
                console.log("Winner",postion1);
                showWinner(postion1);
            }
        }

    };
};
newBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
