var moves = ["Rock.png", "Paper.png", "Scissor.png" ];
var pics = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg", "8.jpg", "9.jpg","10.jpg"];
var cwins = 0;
var uwins = 0;

facts = ["In its more than 13-billion-mile journey, object’s light becomes heavily shifted toward the red side of the electromagnetic spectrum.Therefore, JWST’s primary mirrors are plated in 24-karat gold.",
        "Launching in 1990, Hubble Space Telescope was the largest space telescope in history. ",
        "JWST will be four times farther from Earth than our Moon!",
        "Sharpness of vision, or angular resolution, is everything for space telescopes. And, JWST is no slouch in that department.In fact, the telescope could clearly see a US penny from around 24 miles away.",
        "JWST’s state-of-the-art infrared instruments will help us locate new planets and accurately identify the presence of important things, like water.",
        "One Side of the Telescope Is Hotter Than Death Valley, the Other Side Is Colder Than Antarctica",
        "JWST’s Science Instruments Will Function at Close To Absolute Zero",
        "James Webb is 6.5 meters in diameter, made out of 18 different mirror segments, with a collecting area of 25.37 square meters.",
        "James Webb’s mirrors are the lightest large telescope mirrors of all-time.",
        "When it runs out of fuel, its fate will be to permanently reside in a “graveyard orbit” around the Sun."
        ];
var randomf = Math.floor(Math.random() * 10);


$(".btn").click(function(){
	userMove = this.innerHTML;
	compMove = computerMove();
	$(".img2").attr("src","images/" + userMove + ".png");
	switch (userMove){
		case "Rock": switch(compMove){
					case 0: console.log("Draw");
							$("h1").text("Draw!");
					break;
					case 1: console.log("Computer wins")
							$("h1").text("🚩 Player 1 Wins!")
							cwins++;
							$("#comp").text("Score: " + cwins)
					break;
					case 2: console.log("User wins")
							$("h1").text("Player 2 Wins! 🚩")
							uwins++;
							$("#user").text("Score: " + uwins)
					break;
					default: console.log()
					}
		break;

		case "Paper": switch(compMove){
					case 0: console.log("User wins")
							$("h1").text("Player 2 Wins! 🚩")
							uwins++;
							$("#user").text("Score: " + uwins)
					break;
					case 1: console.log("Draw");
							$("h1").text("Draw!");
					break;
					case 2: console.log("Computer wins")
							$("h1").text("🚩 Player 1 Wins!")
							cwins++;
							$("#comp").text("Score: " + cwins)
					break;
					default: console.log();
					}
		break;
		case "Scissor": switch(compMove){
					case 0: console.log("Computer wins")
							$("h1").text("🚩 Player 1 Wins!")
							cwins++;
							$("#comp").text("Score: " + cwins)
					break;
					case 1: console.log("User wins")
							$("h1").text("Player 2 Wins! 🚩")
							uwins++;
							$("#user").text("Score: " + uwins)
					break;

					case 2: console.log("Draw");
							$("h1").text("Draw!");
					break;
					default: console.log();
					}
		break;
		default:console.log();
	}
 
	checkGame();
});


function computerMove() {
	var randomMove = Math.floor(Math.random() * 3);

	$(".img1").attr("src","images/" + moves[randomMove]);

	return randomMove;

}


function checkGame(){
	if (uwins === 3){
		console.log("gameend");
		$("h1").text("You win this round here's the fact " + facts[randomf])
		cwins = 0
		uwins = 0
		setTimeout(function(){
		$(".img1").attr("src","pics/" + pics[randomf]);
		if (randomf == 9){
			$(".img2").attr("src","pics/" + pics[randomf-1]);
		}
		else{
			$(".img2").attr("src","pics/" + pics[randomf+1]);
		}
		$("h3").text("Score: " + cwins)
		})
	}
	else if (cwins === 3){
		console.log("gameend");
		$("h1").text("You loose this round Sorry no fact!")
		cwins = 0
		uwins = 0
		setTimeout(function(){
		$("img").attr("src","images/rpc.gif");
		$("h3").text("Score: " + uwins)
		}, 2000)
	}
}
