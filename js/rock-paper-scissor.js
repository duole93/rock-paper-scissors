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
//need a draw message
function getFinalWinner(playerCount, compCount){
	if(playerCount>(compCount)){
		return "You are The True Winner!";
	}
	else if(playerCount === (compCount))
		return "It's a draw."
	else
		return "LOSSER! Better Luck Next Time";
}

function game(){
	let playerPick=1;
	let compPick=1;
	let playerWinCount = 0;
	let draw=0;
	let compWinCount =0
	let result = 0;
	for (let i =0; i < 5; i ++){
		console.log(`This is game ${i+1}`);
		playerPick=Number(prompt("Your Pick?"));
		if((playerPick>3||playerPick<1)|| isNaN(playerPick)){
			console.log("You quit, loser!")
			return;
		}
		compPick=getComputerChoice();
		result = getResult(playerPick,compPick);
		if(result==1){
			playerWinCount++;
		}
		else if(result==0){
			draw++;
		}
		else 
			compWinCount++
		console.log(getResultMessage(result, playerPick,compPick));
		console.log(`Player Win: ${playerWinCount}`+" "+`Computer Win: ${compWinCount}`+" "+`Draw: ${draw}`);
	}
	
	
	console.log(getFinalWinner(playerWinCount,compWinCount));
}

game();
