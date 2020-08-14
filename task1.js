function myFunction(word1,word2) {
	for(let i = 0 ; i<= word1.length-1; i++){
		if(word1.length === word2.length && word1.split("").sort()[i] === word2.split("").sort()[i]){
			return true;
		}
	}
	return false;
}

function myFunction(word1,word2) {
	if(word1.length === word2.length && word1.split("").sort() === word2.split("").sort()){
		return true;
	}
	return false;
}




