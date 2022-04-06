let numberOfFilms;

function start () {
    numberOfFilms  = +prompt('Сколько фильмов Вы уже посмотрели?', '');

    while (numberOfFilms == ''|| numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms  = +prompt('Сколько фильмов Вы уже посмотрели?', '');
    }
}

start();

const personalMuvieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
}


function rememberMyFilms () {
    for (let i = 0; i < numberOfFilms; i++) {
        const a = prompt ('Один из последних просмотренных фильмов', '');
        const b = +prompt ('На сколько Вы его оценили', ''); 
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMuvieDB.movies[a] = b;
            console.log("+");
        } else {
            console.log("-");
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel () {
    if (personalMuvieDB.count < 10) {
        console.log('мало');
    } else if (personalMuvieDB.count >= 10 && personalMuvieDB.count <= 30) {
        console.log('норм');
    } else if (personalMuvieDB.count > 30) {
        console.log('ууууууу');
    } else {
        console.log('ошибка');
    }
}

detectPersonalLevel();

function showMyDb (hidden) {
    if (!hidden) {
        console.log(personalMuvieDB);
    }
}

showMyDb(personalMuvieDB.private);

function writeYourGenres () {
    for (let i = 1; i <= 3; i ++) {
        const genre = prompt (`Ваш любимый жанр под номером ${i}`);
        personalMuvieDB.genres[i - 1] = genre;
    }
}

writeYourGenres();