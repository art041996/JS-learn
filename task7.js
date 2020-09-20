function sumId(id){
	if(id < 0 ){
		return
	}
	if(id >=0 && id <9){
		return id
	}
	if ( id > 9){
		var result = `${id}`.split("").reduce((total,num)=>(Number(total)+Number(num)))
	}
	return sumId(result)
}