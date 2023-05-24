// import { user } from "./script.js";

let dashboardWelcome = document.getElementById("welcome");
// dashboardWelcome.innerHTML = `<h1 class="dashboard-welcome"> Welcome, ${user.username}! <h1>`;


// Get the welcome div and the logout button
let welcomeDiv = document.getElementById("welcome");
let logoutBtn = document.getElementById("logout-btn");

// Get the current user information from localStorage
let user = JSON.parse(localStorage.getItem("currentUser"));

// If there is no current user, redirect to the login page
if (!user) {
    window.location.href = "index.html";
  }

// Display the welcome message with the current user's name
dashboardWelcome.innerHTML = `Welcome to Sation Books, ${user.username}!`;

// Handle the logout process
// logoutBtn.addEventListener("click", () => {
//   // Remove the current user from localStorage and redirect to the login page
//   localStorage.removeItem("user");
//   window.location.href = "signin.html";
// });

// Fetch data from API

let bookStore;

async function fetchApi(){
  await fetch('books.json')
  .then(response => response.json())
  .then(data => {
    // Work with the JSON data
    console.log(data);
    // let bookStore = [];
    bookStore = data;
    localStorage.setItem("myBooks", JSON.stringify(bookStore));
    console.log((bookStore));
  })
  .catch(error => {
    console.log('Error:', error);
  });

}


document.addEventListener('DOMContentLoaded', async function (){
  await fetchApi();
  let products = document.querySelector('.products');
  function dispProd(){
  
    for (let i = 0; i < bookStore.length; i++) {
      console.log(bookStore[i]);

      innerBookstore = bookStore[i];

      for (let i = 0; i < innerBookstore.length; i++) {
        console.log(innerBookstore[i]);
      }
      products.innerHTML +=`
      <div>
      <h2>${bookStore[i].title}</h2>
      <h3>${bookStore[i].authors}</h3>
      </div>
      `;
      
    }
    };
  dispProd();
});


