const numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?','');

const personalMuvieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
}

const a = prompt ('Один из последних просмотренных фильмов', '');
const b = +prompt ('На сколько Вы его оценили', '');
const c = prompt ('Один из последних просмотренных фильмов', '');
const d = +prompt ('На сколько Вы его оценили', '');

personalMuvieDB.movies[a] = b;
personalMuvieDB.movies[c] = d;

console.log(personalMuvieDB);
