let i,j;
let turn0 =true;
let boxes=document.querySelectorAll(".box");
let newArray=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
let checkWins=false;
let newArray2=[0,1,2,3,4,5,6,7,8];
/*
let audio2=new Audio("./music.mp3");
function musicPlay(){
    audio2.play();
}
function musicPlay2(){
    
    audio2.pause();
}
    */

const checkWinner=()=>{
    for(let pattern of newArray){
        let box1=boxes[pattern[0]].textContent;
        let box2=boxes[pattern[1]].textContent;
        let box3=boxes[pattern[2]].textContent;
        if(box1!=""&&box2!=""&&box3!=""){
            if(box1===box2&&box3===box2){
                
               // musicPlay();
                checkWins=true;
                boxes[pattern[0]].style.color="red";
                boxes[pattern[1]].style.color="red";
                boxes[pattern[2]].style.color="red";
                document.querySelector("img").src="./excited.gif";
                document.querySelector(".box2").textContent="congratulations"+" "+box1;
            }
        }
    }
}

for(i=0;i<9;i++){

document.querySelectorAll(".box")[i].addEventListener("click",function(){
    if(this.textContent===""&&checkWins===false){
        //var audio=new Audio("./ting.mp3");
       // audio.play();
    if(turn0){
        this.textContent='O';
        turn0=false;
        document.querySelector(".box2").textContent="turn for player X";
    }else{
        this.textContent='X';
        turn0=true;
        document.querySelector(".box2").textContent="turn for player O";
    }
    }
    checkWinner();


})
}
document.querySelector("button").addEventListener("click",function(){
    checkWins=false;
    turn0 =true;
    for(let ind of newArray2){
        boxes[ind].textContent="";
        boxes[ind].style.color="black";
    }
    document.querySelector("img").src="";
    document.querySelector(".box2").textContent="turn for player O";
  // musicPlay2();
})


