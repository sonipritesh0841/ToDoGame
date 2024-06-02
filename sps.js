let userScore = 0;
let CompScore =0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");


const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];

};
const drawGame = () => {
    console.log("Game is draw")
    msg.innerText = "Game is Draw / Play again"
    msg.style.backgroundColor = "rgb(118, 105, 25)";
};
const showWinner = (userWin , userChoice, compChoice) => {
    if (userWin){
        console.log("You Win");
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}` 
        msg.style.backgroundColor = "Green";
    }
    else{
        console.log("You Lose");
        msg.innerText = `You Lose ${compChoice} beats your ${userChoice}`
        msg.style.backgroundColor = "Red";
    }
};

const playGame = (userChoice) => {
    console.log("user choice =", userChoice);
    const compChoice = genCompChoice();
    console.log("comp choice = ", compChoice);

    if(userChoice === compChoice){
        drawGame();
    }else {
        let userWin = true; 
        if ( userChoice ==="rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === " paper"){
            userWin = compChoice === "scissor" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin ,  userChoice , compChoice );
    }
};

choices.forEach((choice) =>{
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});