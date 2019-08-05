function ivestasAmzius(amzius){
	if(isNaN(amzius)){
	alert ("Įveskite skaičių");
	}
	if(amzius < 18) {
		return false;
	}
	else{
		return true;
	}
}
