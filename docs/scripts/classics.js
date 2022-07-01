var episodeList = [
    "An Unearthly Child",
    "The Daleks",
    "The Edge of Destruction",
    "Marco Polo",
    "The Keys of Marinus",
    "The Aztecs",
    "The Sensorites",
    "The Reign of Terror",
    "Planet of Giants",
    "The Dalek INvasion of Earth",
    "The Rescue",
    "The Romans",
    "The Web Planet",
    "The Crusade",
    "The Space Museum",
    "The Chase",
    "THe Time Meddler"

  ];
  
  function generateItem() {
    var randomItem = episodeList[Math.floor(Math.random()*episodeList.length)];
    document.getElementById("episode").innerHTML += "<br>" + randomItem;
  }
  
  function clearItem() {
    document.getElementById("episode").innerHTML = "";
    
  }
  
  