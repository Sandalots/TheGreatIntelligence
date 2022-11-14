var episodeList = [
    "Invasion of the Bane",
    "Revenge of the Slitheen",
    "Eye of the Gorgon",
    "Warriors of Kudlak",
    "Whatever Happened to Sarah Jane?",
    "The Lost Boy",
    "The Last Sontaran",
    "The Day of the Clown",
    "Secrets of the Stars",
    "The Mark of the Berserker",
    "The Temptation of Sarah Jane Smith",
    "Enemy of the Bane",
    "Prisoner of the Judoon",
    "The Mad Woman in the Attic",
    "The Wedding of Sarah Jane Smith",
    "The Eternity Trap",
    "Mona Lisa's Revenge",
    "The Gift",
    "The Nightmare Man",
    "The Vault of Secrets",
    "Death of the Doctor",
    "The Empty Planet",
    "Lost in Time",
    "Goodbye, Sarah Jane Smith",
    "Sky",
    "The Curse of Clyde Langer",
    "The Man Who Never Was",
    "Farewell, Sarah Jane Smith"
  ];
  
  function generateItem() {
    var randomItem = episodeList[Math.floor(Math.random()*episodeList.length)];
    document.getElementById("episode").innerHTML += "<br>" + randomItem;
  }
  
  function clearItem() {
    document.getElementById("episode").innerHTML = "";
    
  }
  
  