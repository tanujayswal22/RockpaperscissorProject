let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const genComputerChoice=()=>{
    const options=["rock", "paper","scissors"];
     //rock paper scissors
    const randIdx= Math.floor(Math.random()*3 );
    return options[randIdx];
};

const drawGame= ()=>{
   msg.innerText="Game was Draw.!!!!  Play Again.";
   msg.style.backgroundColor="#081b31";
};

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`yeeeehhhhhhhhhh!!! You Won the Game! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="cadetblue";
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`Shitttttt You lost the Game!  ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
};
const playGames=(userChoice)=>{
     //Generate computer choice->modular
      const compChoice=genComputerChoice();
      
      if (userChoice===compChoice)
      {
        drawGame();
      }
      else{
        let userWin=true;
        if(userChoice==="rock")
        {
            //scisssors,paper
            userWin=compChoice==="paper" ?false:true;
        }else if(userChoice==="paper")
            {
            userWin=compChoice==="scissors" ?false:true;
        }else {
            userWin=compChoice==="rock"?flase:true;
        }
        showWinner(userWin,userChoice,compChoice);
      }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id"); 
        playGames(userChoice);
    });
});
 