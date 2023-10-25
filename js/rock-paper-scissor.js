//choices   3 = "rock",
//          1= "paper",
//          2= "scissor"

const choices = { 2: "Scissor", 1: "Paper", 3: "Rock" };

//computer choice
function getComputerChoice() {
	return Math.floor(Math.random() * 3 + 1);
}

//win = 1, draw = 0, lose -1;
function getResult(playerChoice, compChoice) {
	if (playerChoice === 3 && compChoice === 1) return -1;
	else if (playerChoice === 1 && compChoice == 3) return 1;
	else if (playerChoice > compChoice) return 1;
	else if (playerChoice < compChoice) return -1;
	else return 0;
}

//player VS computer
function getResultMessage(result, playerChoice, compChoice) {
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

//get final winner message
function getFinalWinner(playerCount){
	if(playerCount>(5-playerCount)){
		return "You are The True Winner!";
	}
	else
		return "Better Luck Next Time";
}

function game(){
	let playerPick=1;
	let compPick=1;
	let playerWinCount = 0;
	let compWinCount
	let result = 0;
	for (let i =0; i < 5; i ++){
		console.log(`This is game ${i+1}`);
		playerPick=+prompt("Your Pick?");
		compPick=getComputerChoice();
		result = getResult(playerPick,compPick);
		playerWinCount += result>0?1:0;
		console.log(getResultMessage(result, playerPick,compPick));
	}
	console.log(`Player Win: ${playerWinCount}`+" "+`Computer Win: ${5-playerWinCount}`);
	console.log(getFinalWinner(playerWinCount));
}

game();
