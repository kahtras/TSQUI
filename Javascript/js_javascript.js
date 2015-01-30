function num() {
	var j = 0;
	num1 = document.getElementsByClassName('form-control');
	
	//var k =  num1[0].value;
	for ( i = 0; i < num1.length; i++) {
		//console.log(num1[i].value);
		if (parseInt(num1[i].value) > j) {
			//console.log(num1[i].value);
			j = num1[i].value;
			//console.log("j is now " + j);
		/*if (num1[i] < k){
			k = num1[i].value;
		} else{}*/
	}
	console.log("max value = "+j);
	//console.log(k);
}
} 