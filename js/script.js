let numberOfFilms;

function start(){
    numberOfFilms = prompt("How many movies have you watched?","");
    while (numberOfFilms == ''|| numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = prompt("How many movies have you watched?","");
    }
}

start();

const personalMoviesDb = {
    coutn: numberOfFilms,
    movies: {
    },
    actors: {
    },
    genres: [],
    privat: false,
};

function rememberMyfILMS(){
    for(let i = 0; i < 2; i++){
    const filmName = prompt("One of the last movies you watched?","");
    const moviesRate = +prompt("How would you rate this movie?","");
    if(filmName != null && moviesRate != null && filmName != '' && moviesRate != ''&& filmName.length < 50){
        personalMoviesDb.movies[filmName] = moviesRate;
    }
    else{
        i--
    }
}
}
rememberMyfILMS();

function personalLvl(){
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

}
personalLvl();

function showMyDb(){
    if (personalMoviesDb.privat == false) {
        console.log(personalMoviesDb)
    }
}
showMyDb()

function whriteYourGenres(){
    for(let i = 1; i <= 3; i++){
    const movieGenre = prompt(`What is your number ${i} movie genre?`);
    personalMoviesDb.genres[i-1]= movieGenre;
    }
}

whriteYourGenres()


// console.log(personalMoviesDb);