let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () =>{
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
    //rock,paper,scissors
};

const drawGame = () => {
    // console.log("game was draw.");
    msg.innerText = "Game was Draw. Play again";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        // console.log("you win!");
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else {
        compScore++;
        compScore++;
        compScorePara.innerText = compScore;
        // console.log("you lose");
        msg.innerText = `You lost, Your ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) =>{
    console.log("user choice=", userChoice)
     //Generate computer choice-->modular programming(dividing each action inside function separately like pieces making reusable components)
     const compChoice = genCompChoice();
     console.log("comp choice =", compChoice);

     if(userChoice=== compChoice) {
        //Draw Game
        drawGame();
     }else{
        let userWin = true;
        if(userChoice === "rock") {
            //comp choice --scissors,paper
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper") {
             //comp choice --scissors,rock
             userWin = compChoice === "scissors" ? false : true;
        } else  {
            //comp choice --paper,rock
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin , userChoice, compChoice);
     }
}

choices.forEach((choice) =>{
    // console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log("choice was clicked",userChoice);
        playGame(userChoice);

    });
});