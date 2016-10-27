function check() {
    var letter=[""];
	var string=["John","Michael","Davis","Cena","Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
	for (var i =0;i<=string.length - 1;i++) {
		 letter[i]=string[i].charAt(0).toLowerCase();
		 	var x=string[i];
				if(letter[i]=='j'){
					console.log("GoodBye"+"  "+string[i]);
				}
				else{
					console.log("Hello"+"  "+string[i]);

				}
	
		}
}

