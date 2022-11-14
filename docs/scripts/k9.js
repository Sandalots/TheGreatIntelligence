var episodeList = [
    "Regeneration",
    "Liberation",
    "The Korven",
    "The Bounty Hunter",
    "Sirens of Ceres",
    "Fear Itself",
    "The Fall of The House of Gryffen",
    "Jaws of Orthrus",
    "Dream-Eaters",
    "Curse of Anubis",
    "Oroborus",
    "Alien Avatar",
    "Aeolian",
    "The Last Oak Tree",
    "Black Hunger",
    "The Cambridge Spy",
    "Lost Library of Ukko",
    "Mutant Copper",
    "The Custodians",
    "Taphony and the Time Loop",
    "Robot Gladiators",
    "Mind Snap",
    "Angel of The North",
    "The Last Precinct",
    "Hound of the Korven",
    "The Eclipse of the Korven"
  ];
  
  function generateItem() {
    var randomItem = episodeList[Math.floor(Math.random()*episodeList.length)];
    document.getElementById("episode").innerHTML += "<br>" + randomItem;
  }
  
  function clearItem() {
    document.getElementById("episode").innerHTML = "";
    
  }
  
  