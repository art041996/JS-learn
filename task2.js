function myFunction(x){
	try {
	    if(typeof x === "undefined") throw "not found or undefined";
	  }
	catch(err) {
   	 return "argument is " + err;
 	}
	return x
  }