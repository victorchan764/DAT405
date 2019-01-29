//DAT405 / GAD405
//S3-00_Variables

function setup() {
  //Setup variables with any content - text, numbers, etc
  var name;
  name = "Glenn";
  console.log(name); //Print to the console

  let floatNumber = 0.4;
  console.log(floatNumber);

  //We can also add variables together (as long as they contain a number)
  let sumFloats = floatNumber + floatNumber;
  console.log(sumFloats);

  //For text we can use a method called concatenation
  let concatanateName = "Steve";
  console.log("Name is: " + concatanateName);
}
