

const personalMuvieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    start: function () {
        personalMuvieDB.count  = +prompt('Сколько фильмов Вы уже посмотрели?', '');
    
        while (personalMuvieDB.count == ''|| personalMuvieDB.count == null || isNaN(personalMuvieDB.count)) {
            personalMuvieDB.count  = +prompt('Сколько фильмов Вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < personalMuvieDB.count; i++) {
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
    },
    detectPersonalLevel: function () {
        if (personalMuvieDB.count < 10) {
            console.log('мало');
        } else if (personalMuvieDB.count >= 10 && personalMuvieDB.count <= 30) {
            console.log('норм');
        } else if (personalMuvieDB.count > 30) {
            console.log('ууууууу');
        } else {
            console.log('ошибка');
        }
    },
    showMyDb: function (hidden) {
        if (!hidden) {
            console.log(personalMuvieDB);
        }
    },
    toggleVisibleMyDb: function () {
        if (personalMuvieDB.private) {
            personalMuvieDB.private = false;
        } else {
            personalMuvieDB.private = true;
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i < 2; i++) {
            let genre = prompt (`Введите Ваши данные через запятую`);

            if (genre === '' || genre == null) {
                i--;
            } else {
                personalMuvieDB.genres = genre.split(', '); 
            }
            
            personalMuvieDB.genres.forEach((item, i) => {
                console.log(`Любимый жанр № ${i + 1} это ${item}`);
            });
            
        }
    }
}


