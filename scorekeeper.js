		
var p1 = document.querySelector("#p1");
var p2 = document.getElementById("p2");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var resetButton = document.getElementById("reset");
var numInput = document.querySelector("input[type ='number']");
var winningScoreDisplay = document.querySelector("#target");
var p1score = 0;
var p2score = 0;
var winningScore = 5;
var gameOver = false;



p1.addEventListener("click", function(){
	if (!gameOver){
		p1score++;
		console.log(p1score, winningScore);
		

		if (p1score === winningScore){
			p1Display.classList.add("winner");
			gameOver = true;
		}
	}
	
	p1Display.textContent = p1score;
});

p2.addEventListener("click", function(){
	if (!gameOver){
		p2score++;
		if (p2score === winningScore){
			p2Display.classList.add("winner");
			gameOver = true;
		}
	}
	
	p2Display.textContent = p2score;
});

resetButton.addEventListener("click", function(){

	reset();

});

function reset(){
	p1score = 0;
	p2score = 0;
	gameOver = false;
	p1Display.textContent = p1score;
	p2Display.textContent = p2score;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
}


numInput.addEventListener("change", function(){
	winningScoreDisplay.textContent = numInput.value;
	console.log(numInput.value);
	console.log(winningScoreDisplay.textContent);
	winningScore = Number(numInput.value);
	reset();

});