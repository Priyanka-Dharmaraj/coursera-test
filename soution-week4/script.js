(function () {
	var string=["John","Michael","Davis","Cena","Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
	for (var i =0;i<=string.length - 1;i++) {
		 var letter=string[i].charAt(0).toLowerCase();
		 	var x=string[i];
				if(letter=='j'){
					helloSpeaker.speak(x);
				}
				else{
					byeSpeaker.speak(x);

				}
	
		}
})();





