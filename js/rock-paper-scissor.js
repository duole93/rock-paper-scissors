//choices   3 = "rock",
//          1= "paper",
//          2= "scissor"

//Computer AI
const choices = { 2: "Scissor", 1: "Paper", 3: "Rock" };
function getComputerChoice() {
	return Math.floor(Math.random() * 3 + 1);
}

//playerVSAI

function getResultMessage(playerChoice, compChoice) {
	let result = getResult(playerChoice, compChoice);
	switch (result) {
		case 1:
			return (
				"You Win! " + choices[playerChoice] + " beat " + choices[compChoice]
			);
			break;
		case -1:
			return (
				"You Lose! " + choices[compChoice] + " beat " + choices[playerChoice]
			);
			break;
		case 0:
			return "It's Draw! Both choose " + choices[playerChoice];
			break;
	}
}

//win = 1, draw = 0, lose -1;
function getResult(playerChoice, compChoice) {
	if (playerChoice === 3 && compChoice === 1) return -1;
	else if (playerChoice === 1 && compChoice == 3) return 1;
	else if (playerChoice > compChoice) return 1;
	else if (playerChoice < compChoice) return -1;
	else return 0;
}

console.log(getComputerChoice());
