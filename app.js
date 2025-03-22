let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset-btn");
let msg_container=document.querySelector(".msg-container");
let msg=document.querySelector(".message");
let new_btn=document.querySelector("#new-btn");
let b=true;

const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
let count=0;
boxes.forEach( (box) => {
     box.addEventListener( "click", () => {
      count++;
         if(b===true){
            b=false;
            box.innerText="O";
         }
         else {
            b=true;
            box.innerText="X";
         }
         box.disabled=true;
         checkWinner();
     });
     
});
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
const display_winner = (winner) =>{
        msg.innerText=`Congratulations, Winner is ${winner}`;
        msg_container.classList.remove("hide");
        disableBoxes();
}
const checkWinner= () =>{
     for(let pattern of winPatterns){
       let p1=boxes[pattern[0]].innerText;
       let p2=boxes[pattern[1]].innerText;
       let p3=boxes[pattern[2]].innerText;
       if(p1!=="" && p2!=="" && p3!=="" && p1===p2 && p2===p3) {
          display_winner(p1);
       }
       else {
         if(count===9) {
            msg.innerText=`Match is Draw`;
            msg_container.classList.remove("hide");
            disableBoxes();
         }
       }
     }
}
const reset_game=() => {
   count=0;
   b=true;
   enableBoxes();
   msg_container.classList.add("hide");
}
reset.addEventListener("click", reset_game);
new_btn.addEventListener("click",reset_game);

