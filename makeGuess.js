function makeGuessF(){
	var listItems = document.getElementById("letters").querySelectorAll("a");
	var guessedLetter;
	for (var i = 0, len = listItems.length; i < len; i++) {
	  listItems[i].onclick= function() {
		  guessedLetter = this.getAttributeNode("value").value;
		};
	};
};