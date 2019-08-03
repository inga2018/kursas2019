function ivestasAmzius(){
	if(isNaN(amzius)){
	alert ("Įveskite skaičių");
	}
	if (amzius < 18) {
		alert("FALSE");
		let rezultatas = amzius < 18;
		return rezultatas;
	}
	else if (amzius >=18) {
		alert("TRUE");
		let rezultatas = amzius >=18;
		return rezultatas;
	}
}
