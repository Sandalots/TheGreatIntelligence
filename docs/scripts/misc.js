var episodeList = [
    "Dr. Who and the Daleks",
    "Daleks' Invasion Earth 2150 A.D.",
    "K9 and Company",
    "Pilot Episode",
    "Mision to the Unknown",
    "Scream of the Shalka",
    "The Infinite Quest",
    "Dreamland",
    "Daleks!",
    "Dimensions in Time",
    "The Curse of Fatal Death",
    "Born Again",
    "Pond Life"
  ];
  
  function generateItem() {
    var randomItem = episodeList[Math.floor(Math.random()*episodeList.length)];
    document.getElementById("episode").innerHTML += "<br>" + randomItem;
  }
  
  function clearItem() {
    document.getElementById("episode").innerHTML = "";
    
  }
  
  