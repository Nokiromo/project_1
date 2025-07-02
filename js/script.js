// 'use strict'
// const personalMoviesDb = {
//     coutn: 0,
//     movies: {
//     },
//     actors: {
//     },
//     genres: [],
//     privat: false,
//     start: function(){
//         personalMoviesDb.coutn = prompt("How many movies have you watched?","");
//         while (personalMoviesDb.coutn == ''|| personalMoviesDb.coutn == null || isNaN(personalMoviesDb.coutn)) {
//             personalMoviesDb.coutn = prompt("How many movies have you watched?","");
//         }
//     },
//     rememberMyfILMS: function(){
//         for(let i = 0; i < 2; i++){
//             const filmName = prompt("One of the last movies you watched?","").trim();
//             const moviesRate = +prompt("How would you rate this movie?","").trim();
//                 if(filmName != null && moviesRate != null && filmName != '' && moviesRate != ''&& filmName.length < 50){
//                     personalMoviesDb.movies[filmName] = moviesRate;
//                 }
//                 else{
//                     i--
//                 }
//         }
//     },
//     personalLvl: function(){
//         if(personalMoviesDb.coutn<10){
//             console.log('You have not watched enough movies');

//         }
//         else if(personalMoviesDb.coutn >= 10 && personalMoviesDb.coutn < 30){
//             console.log('You are a classic viewer')
//         }
//         else if(personalMoviesDb.coutn >= 30){
//             console.log('You are a movie lover')
//         }
//         else{
//         console.log('Error')
//         }
//     },
//     showMyDb: function(hidden){
//         if (!hidden) {
//             console.log(personalMoviesDb)
//         }
//     },
//     whriteYourGenres: function()
//     {
//         for(let i = 1; i <= 3; i++){
//             let genre = prompt(`What is your number ${i} movie genre?`)

//             if (genre ==''&& genre !==null){
//                 console.log('Wrong data')
//                 i--
//             }else{
//                 personalMoviesDb.genres[i-1]= genre;
//             }
//         personalMoviesDb.genres.forEach((item, i )=>{
//            console.log(`Favorite genre ${i+1} is ${item}`) 
//         });
//     }
//     },
//     toggleVisibleMyDb: function(){
//         if(personalMoviesDb.privat){
//             personalMoviesDb.privat = false;
//         }
//         else{
//             personalMoviesDb.privat = true;
//         }
//     },
// };

const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
}
const {shops} = shoppingMallData;
for(let i = 0; i <= shops.length;i++){
    let sum = [];
    sum  += shops[i]
    return sum
}
console.log(sum)
function isBudgetEnough(data) {
    
}