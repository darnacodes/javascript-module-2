/*
================
You are given the following list of movies

Task 1
Create a function called "showMovies" that
- iterates through the "movies" array and
- for each movie, it creates a <p> element with the movie title and director and append it to the #all-movies div.
- it sets the innerText of the #movies-number element to the total number of the movies in the array "movies"

Task 2
Amend your function above to only show movies after 1 second. Remember to use setTimeout to achieve that
Create a new function called "addMovie"
- it receives a movie object as an argument - your can create a new object for your favorite movie following using the "myMovies" objects as a guide 
- it adds the new movie to the list of movies after 2 seconds. Remember to setTimeout to achieve that
Call addMovies to add the new movie to the list and then showMovies to see the movies added on the screen.
How many movies can you see on your page?

Task 3
Can you make sure the new movie you just added is showing on the screen? 
TIP: use callbacks

Task 4
Create a form anywhere on your page. The form should have
- 4 input text fields, one for each property of your movie object
- a "save" button.
When the button is clicked
- The field values should be used to create a new movie object literal
- The new movie is then added to the list of movies and gets displayed on your page
TIP: Use the functions you created on tasks 1-3

================
*/
var movies = [
  {
    title: "Color Out of Space",
    director: "Richard Stanley",
    type: "sci-fi",
    haveWatched: true,
  },
  {
    title: "A Twelve-Year Night",
    director: "Álvaro Brechner",
    type: "horror",
    haveWatched: false,
  },
  {
    title: "The Whistlers",
    director: "Corneliu Porumboiu",
    type: "comedy",
    haveWatched: true,
  },
  {
    title: "The Invisible Man",
    director: "Leigh Whannell",
    type: "horror",
    haveWatched: false,
  },
];

//Task 1 create Showmovie func with Timeout that iterates thru the array
//updates the number of movies

function showMovies(){

  setTimeout(() => {

    movies.map((movie)=>{
      let allMovieElement= document.querySelector("#all-movies");
      let pElement= document.createElement('p');
      pElement.innerText= movie.title + " - " + movie.director + " - " + movie.type;
      allMovieElement.appendChild(pElement);
      
    });
    let moviesNumber= document.querySelector ("#movies-number");
      moviesNumber.innerText = movies.length;
      
  }, 1000);

};
  showMovies()


//Task 2 Create a new function called addMovie with Timeout. Pushes new movie to the array


function addMovieFunc(movie){

  setTimeout(() => {

    movies.push(movie);

      let allMovieElement= document.querySelector("#all-movies");
      let pElement= document.createElement('p');
      pElement.innerText= movie.title + " - " + movie.director + " - " + movie.type;
      allMovieElement.appendChild(pElement);
    
    let moviesNumber= document.querySelector ("#movies-number");
      moviesNumber.innerText = movies.length;

    }, 2000);

  };

  let myMovie = 

    {
    title:"The Sound of Music",
    director:"Robert Wise",
    type:" musical",
    haveWatched:true,
    };


  addMovieFunc(myMovie);

  //Task 4 creating input fields

  let allMovieElement= document.querySelector("#all-movies");
  let formElement=document.createElement("form");
    allMovieElement.appendChild(formElement);

  function addInputElement(property){
    let inputElement=document.createElement("input")

    inputElement.placeholder=property;
    inputElement.id=property;
    formElement.appendChild(inputElement);
    linebreak = document.createElement("br");
    formElement.appendChild(linebreak);
  };

 addInputElement("title");
 addInputElement("director");
 addInputElement("type");
 addInputElement("haveWatched");

//create save button

  let button=document.createElement("button");
      button.innerHTML="save"
      formElement.appendChild(button);
      
//upon click on the save button ,it is adding new movie to the array and renders it

  button.addEventListener("click",(event) =>{
    event.preventDefault();
    let titleAttribute=document.querySelector("#title")
    let directorAttribute=document.querySelector("#director")
    let typeAttribute=document.querySelector("#type")
    let haveWatchedAttribute=document.querySelector("#haveWatched")
    let movie = {
      title: titleAttribute.value,
      director: directorAttribute.value,
      type: typeAttribute.value,
      haveWatched: haveWatchedAttribute.value
    };
    addMovieFunc(movie);

    //clears input field

       titleAttribute.value=" ";
       directorAttribute.value= " ";
       typeAttribute.value= " ";
       haveWatchedAttribute.value= " ";
    
  });
