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
  
    for (let i = 0; i < 31; i++) {
      console.log(bookStore[i]);

      innerBookstore = bookStore[i];

      for (let i = 0; i < innerBookstore.length; i++) {
        console.log(innerBookstore[i]);
      }
      products.innerHTML +=`
      <div class="book-cont">
      <div class="book-div">
      <img src="${bookStore[i].thumbnailUrl}" alt="" class="book-img">
      <h1 class="book-title">${bookStore[i].title}</h1>
      <h3 class="book-author">By: ${bookStore[i].authors}</h3>
      <h4 class="book-cat">Category: ${bookStore[i].categories}</h4>
      </div>
      </div>
      `;
      
    }
    };
  dispProd();
});

document.addEventListener('DOMContentLoaded', async function (){
  await fetchApi();
  let others = document.querySelector('.others');
  function dispOther(){
  
    for (let i = 32; i < 61; i++) {
      console.log(bookStore[i]);

      innerBookstore = bookStore[i];

      for (let i = 0; i < innerBookstore.length; i++) {
        console.log(innerBookstore[i]);
      }
      others.innerHTML +=`
      <div class="book-cont">
      <div class="book-div">
      <img src="${bookStore[i].thumbnailUrl}" alt="" class="book-img">
      <h1 class="book-title">${bookStore[i].title}</h1>
      <h3 class="book-author">By: ${bookStore[i].authors}</h3>
      <h4 class="book-cat">Category: ${bookStore[i].categories}</h4>
      </div>
      </div>
      `;
      
    }
    };
  dispOther();
});


// for (let i = 31; i < 60; i++) {
//   others.innerHTML +=`
//   <div>
//   <img src="${bookStore[i].thumbnailUrl}" alt="">
//   <h1>${bookStore[i].title}</h1>
//   <h3>${bookStore[i].authors}</h3>
//   <h4>${bookStore[i].categories}</h4>
//   </div>
//   `;
  
// }