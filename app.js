// let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?","");

// let personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
// };

// let lastmovie = prompt("Один из последних просмотренных фильмов?"),
//     grade = prompt("На сколько оцените его?"),
//     lastmovie1 = prompt("Один из последних просмотренных фильмов?"),
//     grade1 = prompt("На сколько оцените его?");

// personalMovieDB.movies[lastmovie] = grade;
// personalMovieDB.movies[lastmovie1] = grade1;
// console.log(personalMovieDB);

// let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");

// let personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
// };

// for ( let i = 0; i < 2; i++) {
//     let lastmovie = prompt("Один из последних просмотренных фильмов?",""),
//         grade = prompt("На сколько оцените его?","");
    
//     if (lastmovie != null && grade != null && lastmovie != "" && grade != "" && grade.length < 50) {
//         personalMovieDB.movies[lastmovie] = grade;
//     } else {
//         i--;
//     }
// }

// if (personalMovieDB.count < 10) {
//     alert ("Просмотрено довольно мало фильмов");
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//     alert ("Вы классический зритель");
// } else if (personalMovieDB.count >= 30) {
//     alert ("Вы киноман");
// } else {
//     alert ("Произошла ошибка");
// }

// let j = 0;
// while (j < 2) {
//     let lastmovie = prompt("Один из последних просмотренных фильмов?",""),
//         grade = prompt("На сколько оцените его?","");
//     j++;

//     if (lastmovie != null && grade != null && lastmovie != "" && grade != "" && grade.length < 50) {
//         personalMovieDB.movies[lastmovie] = grade;
//     } else {
//         j--;
//     }
// }

// do {
//         let lastmovie = prompt("Один из последних просмотренных фильмов?",""),
//         grade = prompt("На сколько оцените его?","");
//     j++;

//     if (lastmovie != null && grade != null && lastmovie != "" && grade != "" && grade.length < 50) {
//         personalMovieDB.movies[lastmovie] = grade;
//     } else {
//         j--;
//     }
// } while ( j < 2);
