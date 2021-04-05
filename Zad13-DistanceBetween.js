function distanceBetween(speed1, speed2, timeinSeconds){
  
  let convertKmPerHourToMetersPerSecond1 = speed1 * (5/18);
  let convertKmPerHourToMetersPerSecond2 = speed2 * (5/18);
  let firstV = Math.round(convertKmPerHourToMetersPerSecond1*timeinSeconds);
  let secondV = Math.round(convertKmPerHourToMetersPerSecond2*timeinSeconds);
  console.log(firstV);
  console.log(secondV);
}

distanceBetween(20, 15, 3600);



