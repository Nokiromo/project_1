const numberOfFilms = +prompt("How many movies have you watched?","");
const filmName1 = prompt("One of the last movies you watched?","");
const moviesRate1 = +prompt("How would you rate this movie?","");
const filmName2 = prompt("One of the last movies you watched?","");
const moviesRate2 = +prompt("How would you rate this movie?","");
const personalMoviesDb = {
    coutn: numberOfFilms,
    movies: {
    },
    actors: {
    },
    genres: [],
    privat: false,
};
personalMoviesDb.movies[filmName1] = moviesRate1;
personalMoviesDb.movies[filmName2] = moviesRate2;
console.log(personalMoviesDb)