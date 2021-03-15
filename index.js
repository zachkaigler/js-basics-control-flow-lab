function scuberGreetingForFeet(rideLength){
  // Write your code here!
  let greeting;
  if (rideLength <= 400) {
    greeting = "This one is on me!";
  } else if (rideLength > 2000 && rideLength <= 2500) {
    greeting = 'I will gladly take your thirty bucks.';
  } else if (rideLength > 2500) {
    greeting = "No can do.";
  }
  return greeting;
}

function ternaryCheckCity(city){
  // Write your code here!
  let greeting;
  city === "NYC" ? (greeting = "Ok, sounds good.") : (greeting = "No go.");
  return greeting;
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  let greeting;

  switch (tip) {
    case 'generous':
      greeting = "Thank you so much.";
      break;
    case 'not as generous':
      greeting = "Thank you.";
      break;
    default:
      greeting = "Bye.";
      break;
  }
  return greeting;
}