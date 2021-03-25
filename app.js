let userScore=0;
let computerScore=0;
const userScore_span=document.getElementById("user-score");
const computerScore_span=document.getElementById("computer-score");
const scoreBoard_div=document.querySelector(".score-board");
const result_p=document.querySelector(".result>p");
const rock_div=document.getElementById("r");
const paper_div=document.getElementById("p");
const scissors_div=document.getElementById("s");

function getComputerChoice(){
    const choices=['r','p','s'];
    return choices[Math.floor(Math.random()*3)] ;
}

function game(userChoice){
    const computerChoice=getComputerChoice();
    switch(userChoice+computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice);
            break;
        case "rr":
        case "ss":
        case "pp":
            draw(userChoice);
            break;
        case "ps":
        case "sr":
        case "rp":
            lose(userChoice);
            break;
    }
}
 /// ${aslkd} like {% xyz % }
function win(userChoice){
    userScore++;
    userScore_span.innerHTML=userScore;
    result_p.innerHTML="User Wins!";
    document.getElementById(userChoice).classList.add("green-glow");
    setTimeout(()=>document.getElementById(userChoice).classList.remove("green-glow"),300);
}


function lose(userChoice){
    computerScore++;
    computerScore_span.innerHTML=computerScore;
    result_p.innerHTML="Computer Wins!";
    document.getElementById(userChoice).classList.add("red-glow");
    setTimeout(()=>document.getElementById(userChoice).classList.remove("red-glow"),300);
}

function draw(userChoice){
    result_p.innerHTML="Draw!";
    document.getElementById(userChoice).classList.add("gray-glow");
    setTimeout(()=>document.getElementById(userChoice).classList.remove("gray-glow"),300);
}

function main(){
    rock_div.addEventListener('click',function(){
        game("r");
    });

    paper_div.addEventListener('click',function(){
        game("p");  
    });

    scissors_div.addEventListener('click',function(){
        game("s");
    });
}

main();