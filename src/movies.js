// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let directors = moviesArray.map((movie)=>{
        return movie.director;
    })
    const filteredDirectors = [...new Set(directors)]
    return filteredDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let filteredDirector = moviesArray.filter((movie) => movie.director === "Steven Spielberg")
    let filteredGenre = filteredDirector.filter((movie) => movie.genre.includes("Drama"))
    if (filteredGenre.length === 0){
        return 0;
    }
    return filteredGenre.length;
}
// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    const total = moviesArray.length;
    if (total === 0) {
        return 0;
    }
    let scores = moviesArray.map(movie => movie.score);
    let scoresFiltered=scores.filter(score => score!==undefined)
    let value = scoresFiltered.reduce((sum,rate) => sum+rate,0);
    return parseFloat((value/total).toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let dramaMovies = moviesArray.filter(movie => movie.genre.includes("Drama"));
    const value = scoresAverage(dramaMovies);
    return value;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const copiedArray = [...moviesArray];
    return copiedArray.sort ((first,second) => {
        if (first.year > second.year) {
            return 1;
        } else if (first.year < second.year) {
            return -1;
        } else {
            const firstTitle = first.title.toLowerCase();
            const secondTitle = second.title.toLowerCase();            
            if (firstTitle > secondTitle) {
                return 1;
            } else if (firstTitle < secondTitle) {
                return -1;
            } else {
                return 0;
            }
        }
    })
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const copiedArray = [...moviesArray];
    const sortedArray = copiedArray.sort((first,second) => {
        let firstTitle = first.title.toLowerCase();
        let secondTitle = second.title.toLowerCase();
        if (firstTitle > secondTitle) {
            return 1;
        } else if (firstTitle < secondTitle) {
            return -1;
        } else {
            return 0;
        }
    })
    const titles = sortedArray.map (movie => movie.title)
    if (titles.length <= 20) {
        return titles;
    } else {
        return titles.slice(0,20);
    }
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    const copiedArray =[...moviesArray];
    return moviesArray.map(movie => {
        const duration = movie.duration.split(' ');
        let minutes = 0;
        for (let time of duration) {
          if (time.includes('h')) {
            minutes += parseInt(time) * 60;
          } else {
            minutes += parseInt(time);
          }
          
        }
        return {
            ...movie,
            duration: minutes
        };
      });
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
