let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?","");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

let lastmovie = prompt("Один из последних просмотренных фильмов?"),
    grade = prompt("На сколько оцените его?"),
    lastmovie1 = prompt("Один из последних просмотренных фильмов?"),
    grade1 = prompt("На сколько оцените его?");

personalMovieDB.movies[lastmovie] = grade;
personalMovieDB.movies[lastmovie1] = grade1;
console.log(personalMovieDB);