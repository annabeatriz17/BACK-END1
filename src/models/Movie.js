const { v4: uuid4 } = require('uuid');

class Movie {
    constructor(title, duration, director, plays = 0) {
        this.id = uuid4();
        this.title = title;
        this.duration = duration;
        this.director = director;
        this.plays = plays;
    }
    play() {
        this.plays += 1;
    }
}

module.exports = Movie;