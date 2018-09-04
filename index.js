document.addEventListener("DOMContentloaded", (e) => {
  function replaceMovieContent(movie){
  document.getElementById("title").innerHTML = movies[movie].title;
 
  document.getElementById("director").innerHTML =
  movies[movie].director;
  
  document.getElementById("genre").innerHTML =
  movies[movie].genre;
  
  document.getElementById("filmRating").innerHTML =
  movies[movie].filmRating;
  
  document.getElementById("poster").src =
  movies[movie].poster;
  
  document.getElementById("audienceScore").innerHTML =
  movies[movie].audienceScore;
  
  document.getElementById("description").innerHTML =
  movies[movie].description;
  // invoking a function here will make sure it happens on page load
  // your code here
});
