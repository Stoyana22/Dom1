function countLettrs([string , letter]){
	let count = 0;

	for(let char of string){
		if(char == letter){
			count++;
		}
	}
console.log("Брой: " + count);
}

countLettrs(['hello', 'l']);
