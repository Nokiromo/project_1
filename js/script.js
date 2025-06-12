const numberOfFilms = +prompt("How many movies have you watched?","");
// const filmName1 = prompt("One of the last movies you watched?","");
// const moviesRate1 = +prompt("How would you rate this movie?","");
// const filmName2 = prompt("One of the last movies you watched?","");
// const moviesRate2 = +prompt("How would you rate this movie?","");

const personalMoviesDb = {
    coutn: numberOfFilms,
    movies: {
    },
    actors: {
    },
    genres: [],
    privat: false,
};
// personalMoviesDb.movies[filmName1] = moviesRate1;
// personalMoviesDb.movies[filmName2] = moviesRate2;
for(let i = 0; i < 2; i++){
    const filmName = prompt("One of the last movies you watched?","");
    const moviesRate = +prompt("How would you rate this movie?","");
    if(filmName != null && moviesRate != null && filmName != '' && moviesRate != ''&& filmName.length < 50){
        personalMoviesDb.movies[filmName] = moviesRate;
    }
    else{
        console.log('eror')
        i--
    }
}
if(personalMoviesDb.coutn<10){
    console.log('You have not watched enough movies');

}else if(personalMoviesDb.coutn >= 10 && personalMoviesDb.coutn < 30){
    console.log('You are a classic viewer')
}
else if(personalMoviesDb.coutn >= 30){
    console.log('You are a movie lover')
}
else{
    console.log('Error')
}
console.log(personalMoviesDb);