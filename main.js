var cookies = 0;
var ticker = [];

startUp();


function startUp() {
	addTicker("Don't click the button.");
}

function cookiesClick() {
	cookies += 1;
	document.getElementById("cookies").innerHTML = cookies;
	checkClicks();
}


function checkClicks() {
	switch(cookies) {
		case 1:
			addTicker("You're a cheeky little guy aren't you.");
			break;

		default:
			break;
	}

}


function addTicker(tick) {
	//adds to the ticker
	if(ticker.length > 0){
		ticker.pop();
	}

	ticker.unshift(tick);
	

	//Prints to the ticker
	document.getElementById("ticker").innerHTML = '';

	ticker.forEach(function (line, index, ticker) {
		document.getElementById("ticker").innerHTML += line + "<br><br>";
	});
}
