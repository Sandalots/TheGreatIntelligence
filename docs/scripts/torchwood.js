var episodeList = [
    "Everything Changes",
    "Day One",
    "Ghost Machine",
    "Cyberwoman",
    "Samll Worlds",
    "Countrycide",
    "Greeks Bearing Gifts",
    "They Keep Killing Suzie",
    "Random Shoes",
    "Out of Time",
    "Combat",
    "Captain Jack Harkness",
    "End of Days",
    "Kiss Kiss, Bang Bang",
    "Sleeper",
    "To the Last Man",
    "Meat",
    "Adam",
    "Reset",
    "Dead Man Walking",
    "A Day in the Death",
    "Something Borrowed",
    "From Out of the Rain",
    "Adrift",
    "Fragments",
    "Exit Wounds",
    "Children of Earth - Day One",
    "Children of Earth - Day Two",
    "Children of Earth - Day Three",
    "Children of Earth - Day Four",
    "Children of Earth - Day Five",
    "The New World",
    "Rendition",
    "Dead of Night",
    "Escape to L.A.",
    "The Categories of Life",
    "The Middle Men",
    "Immortal Sins",
    "End of the Road",
    "The Gathering",
    "The Blood Line"
  ];
  
  function generateItem() {
    var randomItem = episodeList[Math.floor(Math.random()*episodeList.length)];
    document.getElementById("episode").innerHTML += "<br>" + randomItem;
  }
  
  function clearItem() {
    document.getElementById("episode").innerHTML = "";
    
  }
  
  