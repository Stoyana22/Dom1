function biggestNumber([num1,num2,num3]){
[num1,num2,num3]-[num1, num2, num3].map(Number);
console.log(Math.max(num1,num2,num3));
}

biggestNumber(['-2', '60', '100']);
biggestNumber(['200', '-60', '-100']);
biggestNumber(['-2', '-60', '-500']);
