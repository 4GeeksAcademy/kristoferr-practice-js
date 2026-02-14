import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  
  // create combinations of strings using arrays

  const colors = ["black", "red", "white", "green", "pink"];
  const animals = ["wolf", "chicken", "panther", "crocodile"];
  const locations = ["swamp", "tundra", "jungle", "desert"];

  for(let colorIndex = 0; colorIndex < colors.length; colorIndex++){
    for(let animalsIndex = 0; animalsIndex < animals.length; animalsIndex++){
      for (let locationIndex = 0; locationIndex < locations.length; locationIndex++){
        console.log(colors[colorIndex] + animals[animalsIndex] + locations[locationIndex] + ".com");
      }
    }
  }











};
