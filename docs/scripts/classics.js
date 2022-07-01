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
    "The Dalek Invasion of Earth",
    "The Rescue",
    "The Romans",
    "The Web Planet",
    "The Crusade",
    "The Space Museum",
    "The Chase",
    "THe Time Meddler",
    "Galaxy 4",
    "Mission to the Unknown",
    "The Myth Makers",
    "The Daleks' Master Plan",
    "The Massacre of St Bartholomew's Eve",
    "The Ark",
    "The Celestial Toymaker",
    "The Gunfighters",
    "The Savages",
    "The War Machines",
    "The Smugglers",
    "The Tenth Planet",
    "The Power of the Daleks",
    "The Highlanders",
    "The Underwater Menance",
    "The Moonbase",
    "The Macra Terror",
    "The Faceless Ones",
    "The Evil of the Daleks",
    "The Tomb of the Cybermen",
    "The Abominable Snowmen",
    "The Ice Warriors",
    "The Enemy of the World",
    "The Web of Fear",
    "Fury from the Deep",
    "The Wheel in Space",
    "The Dominators",
    "The Mind Robber",
    "The Invasion",
    "The Krotons",
    "The Seeds of Death",
    "The Space Pirates",
    "The War Games",


  ];
  
  function generateItem() {
    var randomItem = episodeList[Math.floor(Math.random()*episodeList.length)];
    document.getElementById("episode").innerHTML += "<br>" + randomItem;
  }
  
  function clearItem() {
    document.getElementById("episode").innerHTML = "";
    
  }
  
  