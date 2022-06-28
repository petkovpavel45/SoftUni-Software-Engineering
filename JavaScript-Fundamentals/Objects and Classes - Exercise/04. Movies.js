function movies(array) {
  let movies = [];

  for (let lines of array) {
    if (lines.includes("addMovie")) {
      let name = lines.split("addMovie ")[1];
      movies.push({ name });
    } else if (lines.includes("directedBy")) {
      let [name, director] = lines.split(" directedBy ");
      let movie = movies.find((movieObj) => movieObj.name === name);
      if (movie) {
        movie.director = director;
      }
    } else if (lines.includes("onDate")) {
      let [name, date] = lines.split(" onDate ");
      let movie = movies.find((movieObj) => movieObj.name === name);
      if (movie) {
        movie.date = date;
      }
    }
  }
  movies.forEach((movie) => {
    if (movie.name && movie.director && movie.date) {
        console.log(JSON.stringify(movie));
    }
  });
}
movies([
  "addMovie Fast and Furious",
  "addMovie Godfather",
  "Inception directedBy Christopher Nolan",
  "Godfather directedBy Francis Ford Coppola",
  "Godfather onDate 29.07.2018",
  "Fast and Furious onDate 30.07.2018",
  "Batman onDate 01.08.2018",
  "Fast and Furious directedBy Rob Cohen",
]);
