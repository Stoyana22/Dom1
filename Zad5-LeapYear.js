function leapYear(year){
	let conOne = year % 4 == 0 && year % 100 !=0;
	let condTwo = year % 400 ==0;


	if(conOne || condTwo){
		console.log('Yes');
		return;
	}
	console.log('No');
}

leapYear(1999);
leapYear(2020);
