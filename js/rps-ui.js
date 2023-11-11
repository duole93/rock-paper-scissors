const rule = { rock: "scissor", scissor: "paper", paper: "rock" };
const choices = ["rock", "paper", "scissor"];
const ROUND_MAX = 5;
let round = 1;
let compWin = 0;
let playerWin = 0;
let draw = 0;

//Button
const btnPlayerChoices = document.querySelectorAll(
	".player-choices-container button"
);
const btnFiveRound = document.querySelector(".btn-five-round");
const btnContinue = document.querySelector(".btn-continue");
const btnQuit = document.querySelector(".btn-quit");
const btnStart = document.querySelector(".btn-start");

//containers
const playerChoiceContainer = document.querySelector(
	".player-choices-container"
);
const resultContainer = document.querySelector(".result-container");
const finalDiv = document.querySelector(".result-title");
const winnerDiv = document.querySelector(".result-winner");
const msgDiv = document.querySelector(".result-msg");

//start btn
btnStart.addEventListener("click", () => {
    //Initialize Game
	round = 1;
	compWin = 0;
	playerWin = 0;
	draw = 0;

    //Display Player Choices and message
	btnStart.classList.add("display-none");
	btnQuit.classList.add("display-none");
	resultContainer.classList.remove("display-none");
	playerChoiceContainer.classList.remove("display-none");

    finalDiv.textContent = "";
	winnerDiv.textContent = `Round ${round}`;
	msgDiv.textContent = "pick your poision";




});

//continue
btnContinue.addEventListener("click", () => {
    //if its not End game 
 if (playerWin === 3 || compWin === 3 || round > ROUND_MAX) {
        //Toggle BUTTON
		btnStart.classList.toggle("display-none");
		btnContinue.classList.toggle("display-none");
		btnQuit.classList.toggle("display-none");

        //Display Winner
		finalDiv.textContent = "FINAL RESULT";
		msgDiv.textContent = `Player ${playerWin} : Computer ${compWin}`;
		if (playerWin > compWin) {
			winnerDiv.textContent = `Player Win!`;
		} else if (compWin > playerWin) {
			winnerDiv.textContent = `Computer Win!`;
		} else {
			winnerDiv.textContent = `Draw!`;
		}
	}	else if (round <= ROUND_MAX) {
        //show choices 
		btnContinue.classList.toggle("display-none");
		btnQuit.classList.toggle("display-none");
		playerChoiceContainer.classList.toggle("display-none");
		winnerDiv.textContent = `Round ${round}`;
		msgDiv.textContent = "pick your poision";
	} 
    //END game
    
});

//quit
btnQuit.addEventListener("click", () => {
	//
});

//player choices
btnPlayerChoices.forEach((choice) => {
	choice.addEventListener("click", (event) => {

        //not end game
		if (round <= ROUND_MAX) {
            //compare choices
			const player = event.target.className;
			const comp = choices[Math.floor(Math.random() * 3)];
			const winner = getWinner(player, comp);

            //display game status
			finalDiv.textContent = `Player ${playerWin} Draw ${draw} Computer ${compWin}`;
			winnerDiv.textContent = winner.winner;
			msgDiv.textContent = winner.reason;

			playerChoiceContainer.classList.toggle("display-none");
			btnContinue.classList.toggle("display-none");
			btnQuit.classList.toggle("display-none");
			round++;
		}
	});
});

//return result messages
function getWinner(player, comp) {
	if (player === comp) {
		draw++;
		return { winner: "It's Draw!", reason: `Both picked ${player}` };
	}

	if (rule[player] === comp) {
		playerWin++;
		return { winner: "Player Win!", reason: `${player} beats ${comp}` };
	} else {
		compWin++;
		return { winner: "Computer Win!", reason: `${comp} beats ${player}` };
	}
}
