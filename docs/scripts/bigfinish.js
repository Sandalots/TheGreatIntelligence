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
    "The Second Doctor Adventures"
 
  ];
  
  function generateItem() {
    var randomItem = episodeList[Math.floor(Math.random()*episodeList.length)];
    document.getElementById("episode").innerHTML += "<br>" + randomItem;
  }
  
  function clearItem() {
    document.getElementById("episode").innerHTML = "";
    
  }
  
  