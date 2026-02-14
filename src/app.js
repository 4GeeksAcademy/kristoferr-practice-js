import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  
  // create combinations of strings using arrays

  // const colors = ["black", "red", "white", "green", "pink"];
  // const animals = ["wolf", "chicken", "panther", "crocodile"];
  // const locations = ["swamp", "tundra", "jungle", "desert"];

  // for(let colorIndex = 0; colorIndex < colors.length; colorIndex++){
  //   for(let animalsIndex = 0; animalsIndex < animals.length; animalsIndex++){
  //     for (let locationIndex = 0; locationIndex < locations.length; locationIndex++){
  //       console.log(colors[colorIndex] + animals[animalsIndex] + locations[locationIndex] + ".com");
  //     }
  //   }
  // }

  let pronoun = ['the', 'our', 'she', 'he'];
  let adjective = ['great', 'big', 'awesome', 'giant'];
  let noun = ['jogger', 'racoon', 'man', 'woman'];
  let extensions = [".com", ".org", ".info", ".ai"];

  for(let i in pronoun){
    //console.log(pronoun[index]);
    for(let j in adjective){
      //console.log(pronoun[key] + adjective[key]);  
      for(let k in noun){
        //console.log(pronoun[i] + adjective[j] + noun[k] + ".com");  
        for(let l in extensions){
          console.log(pronoun[i] + adjective[j] + noun[k] + extensions[l]);  
        }
      }
    }
  }

  // let bigArray = [
  //   [1,2,3],
  //   [4,5,6],
  //   [6,7,8],
  //   [9,10,11],
  // ];
  // //console.log(bigArray);
  // //console.log(bigArray[0][0]);

  // for(let a in bigArray){
  //   //console.log(bigArray[a]);
  //   for(let aa in bigArray[a]){
  //     console.log(bigArray[a][aa]);
  //   }
  // }








// Nested for loops in website development are primarily used for managing and displaying multi-dimensional or hierarchical data structures, especially in backend logic for data processing or generating complex frontend content. 
// Key practical applications for websites include:
// Displaying Data in Tables: The most common application involves iterating over rows and columns of data. An outer loop processes each row, and an inner loop processes each cell within that row. This is fundamental for rendering spreadsheets, database results, or calendars.
// Generating Hierarchical Navigation/Menus: Nested loops can build multi-level menus or navigation structures from a nested data source (e.g., a list of main categories, each with a list of sub-categories).
// User Management and Permissions: In the backend, a nested loop might be used to iterate through a list of users and, for each user, iterate through a list of their assigned permissions or roles to manage access control.
// Displaying Product Categories/Galleries: Websites often use nested loops to organize and display items. For example, an outer loop might go through product categories, and an inner loop displays the products within that specific category.
// E-commerce Functionality:
// Shopping Cart Processing: Iterating through items in a cart (outer loop) and checking various properties of each item, like available options or special offers (inner loop).
// Order Fulfillment: A system might loop through orders and then loop through each product within that order to update inventory or generate shipping labels.
// Generating HTML Structure: They can dynamically generate repeating HTML elements efficiently. Instead of manually writing similar code, a loop structure allows the server or client-side script to create the necessary structure based on the available data.
// Data Processing (Backend): When dealing with large datasets, like a list of students and their test scores, nested loops can be used for calculations, such as finding total scores or averages for each student. This processing often happens on the server before the data is sent to the website user. 
// While powerful, it is important to note that nested loops can be slow when processing very large datasets, a performance characteristic known as O(N²) in Big O notation. Developers sometimes explore alternative methods for efficiency in these case








};
