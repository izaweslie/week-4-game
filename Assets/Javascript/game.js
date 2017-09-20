
	// let hiddenKittens = Math.floor(Math.random() * 6); 
	//  hiddenKittens = kitten1;
	// 	hiddenKittens = kitten2;
	// 	hiddenKittens = kitten3;
	// 	hiddenKittens = kitten4;
	
	var kitten1 = Math.floor(Math.random() * 6); //img 1 https://i.pinimg.com/736x/d3/54/79/d3547916f4b2f83d0ab16803a5271ba2--cute-baby-cats-baby-kitty.jpg
	var kitten2 = Math.floor(Math.random() * 6); //img 2 https://petcube.com/blog/content/images/2017/04/kitten-supplies-cover-1.jpg
	var kitten3 = Math.floor(Math.random() * 6); // img 3 https://pbs.twimg.com/profile_images/562466745340817408/_nIu8KHX.jpeg
	var kitten4 = Math.floor(Math.random() * 6); // https://i.pinimg.com/736x/61/35/22/6135220e757e1fcd3148c3f9e273d79e--minecraft-stuff-minecraft-humor.jpg


	
	//lives 
	var livesCounter = 9;
		$("#lives").html(livesCounter);

	var totalScoreCounter = 0;
		$("#yourScore").html(totalScoreCounter);
 
//random number at start of game.
var randomNum = Math.floor(Math.random() * 37);
	$("#miceCaught").html("Find enough kittens to score " + randomNum + " points.");

 		
//assign click functions to each image, assign random numbers to each image, .html() things
	
//bucket click functions
$("#bucket").on("click", function(bucket) {
		console.log(bucket);
	if (kitten1 >= 3) {
		$("#bucket").html("<img src='https://i.pinimg.com/736x/d3/54/79/d3547916f4b2f83d0ab16803a5271ba2--cute-baby-cats-baby-kitty.jpg'>");
	}
	else {
		$("#bucket").html("<img src='https://us.123rf.com/450wm/kchung/kchung1303/kchung130300332/18404666-cartoon-animal-control-officer-with-dog-in-net.jpg?ver=6'>");
	}

		if (kitten1 >= 3) {
		//total score
			totalScoreCounter += 5;
			console.log(totalScoreCounter); 
			$("#yourScore").html(totalScoreCounter);
	}
	else {	
		//lives 
			livesCounter--;
			$("#lives").html(livesCounter);
			console.log(livesCounter);
	}
//code to be repeated
//insert do while code :: https://stackoverflow.com/questions/24648380/how-to-write-a-do-while-loop-in-jquery OR setInterval()
//do for all click functions


	});


//bush click functions
	$("#bush").on("click", function() {
		console.log(bush);
	if (kitten2 >= 3) {
		$("#bush").html("<img src='https://petcube.com/blog/content/images/2017/04/kitten-supplies-cover-1.jpg'>");
			totalScoreCounter += 5;
			console.log(totalScoreCounter); 
			$("#yourScore").html(totalScoreCounter);
	}
	else {
		$("#bush").html("<img src='https://previews.123rf.com/images/kchung/kchung1303/kchung130300329/18404658-Cartoon-animal-control-officer-chasing-a-dog-with-a-net--Stock-Vector.jpg'>");
		//lives 
			livesCounter--;
			$("#lives").html(livesCounter);
			console.log(livesCounter);
	}
	});


//rock click functions
	$("#rock").on("click", function() {
		console.log(rock);
	
	if (kitten3 >= 3) {
		$("#rock").html("<img src='https://pbs.twimg.com/profile_images/562466745340817408/_nIu8KHX.jpeg'>");
	}
	else {
		$("#rock").html("<img src='https://previews.123rf.com/images/kchung/kchung1303/kchung130300340/18404662-Cartoon-animal-control-officer-with-a-cat-caught-in-a-net--Stock-Vector.jpg'>");
	}

		if (kitten3 >= 3) {
		//total score
			totalScoreCounter += 5;
			console.log(totalScoreCounter); 
			$("#yourScore").html(totalScoreCounter);
	}
	else {	
		//lives 
			livesCounter--;
			$("#lives").html(livesCounter);
			console.log(livesCounter);
	}
	});

//cheese click functions
	$("#cheese").on("click", function() {
		console.log(cheese);

// having trouble getting the cheese image to change
	if (kitten4 >= 3) {
		$("#cheese").html("<img src='https://i.pinimg.com/736x/61/35/22/6135220e757e1fcd3148c3f9e273d79e--minecraft-stuff-minecraft-humor.jpg'>");
	}
	else {
		$("#cheese").html("<img src='https://previews.123rf.com/images/kchung/kchung1303/kchung130300365/18404661-Cartoon-animal-control-officer-with-a-cat-caught-in-a-net-Stock-Vector.jpg'>");

	}
		if (kitten4 >= 3) {
		//total score
			totalScoreCounter += 5;
			console.log(totalScoreCounter); 
			$("#yourScore").html(totalScoreCounter);
	}
	else {	
		//lives 
			livesCounter--;
			$("#lives").html(livesCounter);
			console.log(livesCounter);
	}
	});

//Add code to if yourScore === miceCaught then you win, else .. "Sent to the pound!"
//Add play again (aka reset button)
//Add the wins and losses counters


//trying to create a function with multiple parameters and initialize the if .. else for above click functions using let = hiddenkittens instead of four unique variable :: 
	// if (hiddenKittens >= 4) {
	// 	//total score
	// 		totalScoreCounter += 5;
	// 		console.log(totalScoreCounter); 
	// 		$("#yourScore").html(totalScoreCounter);
	// }
	// else {	
	// 	//lives 
	// 		livesCounter--;
	// 		$("#lives").html(livesCounter);
	// 		console.log(livesCounter);
	// }

	// if (livesCounter === 0) {
	// 	alert("Game Over!");
	// }
	