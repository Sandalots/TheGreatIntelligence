var episodeList = [
    "The Monthly Adventures",
    "Special Releases",
    "The Seventh Doctor Adventures",
    "The Sixth Doctor Adventures",
    "The Fifth Doctor Adventures",
    "Unbound",
    "The Eigth Doctor Adventures",
    "The Companion Chronicles",
    "The Stageplays",
    "Short Trips",
    "The Lost Stories",
    "The Fourth Doctor Adventures",
    "Novel Adaptions",
    "Destiny of the Doctor",
    "Philip Hinchcliffe Presents",
    "The Early Adventures",
    "The Third Doctor Adventures",
    "The War Doctor",
    "The Tenth Doctor Adventures",
    "Classic Doctors, New Monsters",
    "The Doctor Chronicles",
    "The First Doctor Adventures",
    "The Ninth Doctor Adventures",
    "The Audio Novels",
    "The Second Doctor Adventures",
    "Bernice Summerfield",
    "Dalek Empire",
    "Sarah Jane Smith",
    "Gallifrey",
    "UNIT",
    "Cyberman",
    "Iris Wildthyme",
    "I, Davros",
    "Jago & Litefoot",
    "Graceless",
    "Counter-Measures",
    "Vienna",
    "Charlotte Pollard",
    "The New Adventures of Bernice Summerfield",
    "Torchwood",
    "UNIT: The New Series",
    "The Diary of River Song",
    "The Churchill Years",
    "The New Counter-Measures",
    "The Lives of Captain Jack",
    "The War Master",
    "Tales from New Earth",
    "Jenny: The Doctor's Daughter",
    "Class",
    "Lady Christina",
    "Missy",
    "The Eigth of March",
    "The Paternoster Gang",
    "Rose Tyler: The Dimension Cannon",
    "The Robots",
    "Donna Noble: Kidnapped!",
    "Susan's War",
    "Master!",
    "The Lone Centurion",
    "The Year of Martha Jones",
 
  ];
  
  function generateItem() {
    var randomItem = episodeList[Math.floor(Math.random()*episodeList.length)];
    document.getElementById("episode").innerHTML += "<br>" + randomItem;
  }
  
  function clearItem() {
    document.getElementById("episode").innerHTML = "";
    
  }
  
  