let userScr = 0;
let compScr = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScrmain= document.querySelector("#user-score");
const compScrmain= document.querySelector("#comp-score");


const genCompChoice = () => {
    let opt = ["rock", "paper", "syser"];
    const randIdx = Math.floor(Math.random() * 3);
    return opt[randIdx];
}

const showWin = (userWin, userChoice, compChoice) => {
    
    
    
    if (userWin) {
        userScr ++;
        userScrmain.innerText=userScr;
        console.log(" you won..!");
        msg.innerText = `You won..! your  ${userChoice} beats ${compChoice}.`;
        msg.style.backgroundColor = "green";
    } else {
        compScr ++;
        compScrmain.innerText=compScr;
        console.log(" you lose..!");
        msg.innerText = `You lost..!  ${compChoice} beats  your ${userChoice}.`;
        msg.style.backgroundColor = "red";
    }


};
const drawGm = (userChoice, compChoice) => {
    console.log(" game is draw..!");
    msg.innerText = "Match was draw..! Play again buddy.";
    msg.style.backgroundColor = "purple";
}

const playGame = (userChoice) => {

    console.log("User choice = ", userChoice);
    const compChoice = genCompChoice();
    console.log(" comp choice = ", compChoice);

    if (userChoice === compChoice) {
        // draw
        drawGm();
    } else {
        let userWin = true;

        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "syser" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }

        showWin(userWin, userChoice, compChoice);

    }

};





choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        // console.log(" choice was clicked" , userChoice);
        playGame(userChoice);
    });
});

