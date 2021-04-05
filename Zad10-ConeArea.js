function coneAreaAndSurface(arr){
	arr=arr.map(Number);
	let radius = arr[0];
    let height = arr[1];

//Обем на конус - Volume Cone
  let volumeCone = (Math.PI * Math.pow(radius,2) * height)/3;
  console.log("Обем на конус: " + volumeCone);

//Наклонена височина - Slant height
   let slantOne = Math.pow(height,2);
   let slantTwo = Math.pow(radius,2);
   let slant = slantOne+slantTwo;
   let slantHeight = Math.sqrt(slant);
   

//Странична площ на повърхност - Lateral surface
   let lateralSurface = Math.PI * radius * slantHeight;
  

//Площ на основата на конуса - Base surface area
   let baseSurface = Math.PI*Math.pow(radius,2);
   

//Обща повърхност - Total surface area
   let totalSurfaceArea = lateralSurface+baseSurface;
   console.log("Обща повърхност: " + totalSurfaceArea);
}
coneAreaAndSurface(['3','8']);
