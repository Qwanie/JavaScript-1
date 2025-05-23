//Just to ensure we force js into strict mode in HTML scrips - we don't want any sloppy code
'use strict';  // Try without strict mode

//Start the server by opening a terminal in /03-case-study-server and type node 06-post-and-read-json-server.js
const urlGetPost = 'http://localhost:3000/ingredients';      //used for get and post

async function myFetch(url, method = null, body = null) {
  try {

    let res = await fetch(url, {
      method: method ?? 'GET',
      headers: { 'content-type': 'application/json' },
      body: body ? JSON.stringify(body) : null
    });

    if (res.ok) {

      console.log("Request successful");

      //get the data from server
      let data = await res.json();
      return data;
    }
    else {

      //typcially you would log an error instead
      console.log(`Failed to recieved data from server: ${res.status}`);
      alert(`Failed to recieved data from server: ${res.status}`);
    }
  }
  catch (err) {

    //typcially you would log an error instead
    console.log(`Failed to recieved data from server: ${err.message}`);
    alert(`Failed to recieved data from server: ${err.message}`);
  }
}

const ingredient = document.getElementById('ingredient');

const myForm = document.getElementById('my-form');
myForm.addEventListener('submit', async (event) => {

  event.preventDefault();

  //read a url, get an object convert it to an object from url
  let ingredients = await myFetch(urlGetPost);
  console.log(ingredients);

  //add an ingredient
  ingredients.push({ id: ingredients.length + 1, item: `${ingredient.value}` });

  //write the object to the url
  ingredients = await myFetch(urlGetPost, 'POST', ingredients);
  console.log(ingredients);

});