var myArray = [
  "Rose",
  "The End of the World",
  "The Unquiet Dead",
  "Aliens of London",
  "World War Three",
  "Dalek",
  "The Long Game",
  "Father's Day",
  "The Empty Child",
  "The Doctor Dances",
  "Boom Town",
  "Bad Wolf",
  "The Parting of the Ways",
  "The Christmas Invasion"
];

function generateItem() {
  var randomItem = myArray[Math.floor(Math.random()*myArray.length)];
  document.getElementById("demo").innerHTML = randomItem;
}
