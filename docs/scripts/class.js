var episodeList = [
    "For Tonight We Might Die",
    "The Coach with the Dragon Tattoo",
    "Nightvisiting",
    "Co-Owner of a Lonely Heart",
    "Brave-ish Heart",
    "Detained",
    "The Metaphysical Engine, or What Quill Did",
    "The Lost"
  ];
  
  function generateItem() {
    var randomItem = episodeList[Math.floor(Math.random()*episodeList.length)];
    document.getElementById("episode").innerHTML += "<br>" + randomItem;
  }
  
  function clearItem() {
    document.getElementById("episode").innerHTML = "";
    
  }
  
  