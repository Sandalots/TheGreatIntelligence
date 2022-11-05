var episodeList = [
    "The Woman Who Fell to Earth",
    "The Ghost Monument",
    "Rosa",
    "Arachnids in the UK",
    "The Tsuranga Conundrum",
    "Demons of the Punjab",
    "Kerblam!",
    "The Witchfinders",
    "It Takes You Away",
    "The Battle of Ranskoor Av Kolos",
    "Resolution",
    "Spyfall Part 1",
    "Spyfall Part 2",
    "Orphan 55",
    "Nikola Tesla's Night of Terror",
    "Fugitive of the Judoon",
    "Praxeus",
    "Can You Hear Me?",
    "The Haunting of Villa Diodati",
    "Ascension of the Cybermen",
    "The Timeless Children",
    "Revolution of the Daleks",
    "The Halloween Apocalypse",
    "War of the Sontarans",
    "Once, Upon a Time",
    "Village of the Angels",
    "Survivors of the Flux",
    "The Vanquishers",
    "Eve of the Daleks",
    "Legend of the Sea Devils",
    "The Power of The Doctor"

  ];
  
  function generateItem() {
    var randomItem = episodeList[Math.floor(Math.random()*episodeList.length)];
    document.getElementById("episode").innerHTML += "<br>" + randomItem;
  }
  
  function clearItem() {
    document.getElementById("episode").innerHTML = "";
    
  }
  
  