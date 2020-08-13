
function myFunction(obj){
	for (let i in obj) {
	  if(i === "prop"){
	  	delete obj.prop
        return true
	  }
	}
    console.log(obj)
	return false
}