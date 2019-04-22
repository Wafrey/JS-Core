const assert = require('chai').assert;
const FilmStudio = require('./FilmStudio');

describe("Inizialize", function () {
    it('should create empty arr films', function () {
        let fs = new FilmStudio('Ivan');
        assert.deepEqual(fs.films,[]);
    });
});

describe("Make movie", function () {
    it('should create a new film', function () {
        let fs = new FilmStudio('Ivan');
        fs.makeMovie('Avengers',['Superman','Test']);
        assert.equal(fs.films[0].filmName,'Avengers');
    });
    it('should create a new film', function () {
        let fs = new FilmStudio('Ivan');
        fs.makeMovie('Avengers',['Superman','Test']);
        fs.makeMovie('Avengers',['Superman','Test']);
        assert.equal(fs.films[1].filmName,'Avengers 2');
    });
    it('should throw invalid args', function () {
        let fs = new FilmStudio('Ivan');
        let makeMovie = () => fs.makeMovie('Avengers');
        assert.throws(makeMovie);
    });
    it('should throw invalid args 2 ', function () {
        let fs = new FilmStudio('Ivan');
        let makeMovie = () => fs.makeMovie(123,[]);
        assert.throws(makeMovie);
    });
    it('should throw invalid args 3', function () {
        let fs = new FilmStudio('Ivan');
        let makeMovie = () => fs.makeMovie("Ivan",null);
        assert.throws(makeMovie);
    });
});

describe("castiong", function () {
    it('should work fine', function () {
        let fs = new FilmStudio('Ivan');
        fs.makeMovie('Avengers',['Superman','Test']);
        let exp = 'You got the job! Mr. Goshe you are next Superman in the Avengers. Congratz!';
        assert.equal(fs.casting('Goshe','Superman'),exp);
    });

    it('should work with no films', function () {
        let fs = new FilmStudio('Ivan');
        assert.equal(fs.casting('Goshe','Superman'),'There are no films yet in Ivan.');
    });

    it('should work fine', function () {
        let fs = new FilmStudio('Ivan');
        fs.makeMovie('Avengers',['Superman','Test']);
        let exp = 'Goshe, we cannot find a NOROLE role...';
        assert.equal(fs.casting('Goshe','NOROLE'),exp);
    });
});

describe("lookForProducer", function () {
    it('should work fine', function () {
        let fs = new FilmStudio('Ivan');
        fs.makeMovie('Avengers',['Superman','Test']);
        fs.casting('Goshe','Superman');
        let expected = 'Film name: Avengers\n' +
            'Cast:\n' +
            'Goshe as Superman\n' +
            'false as Test\n';
        assert.equal(fs.lookForProducer('Avengers'),expected)
    });

    it('should work fine', function () {
        let fs = new FilmStudio('Ivan');
        fs.makeMovie('Avengers',['Superman','Test']);
        fs.casting('Goshe','Superman');
        let callFilm = () => fs.lookForProducer('NoSuchOne');
        assert.throws(callFilm);
    });
});

describe("make couple films", function () {
    it('should work fine', function () {
        let filmStudio = new FilmStudio('SU-Studio');
        filmStudio.makeMovie('The Avengers', ['Iron-Man', 'Thor', 'Hulk', 'Arrow guy']);
        assert.equal(filmStudio.films[0].filmRoles[0].actor,false)
    });
    it('should work fine', function () {
        let filmStudio = new FilmStudio('SU-Studio');
        filmStudio.makeMovie('The Avengers', ['Iron-Man', 'Thor', 'Hulk', 'Arrow guy']);
        filmStudio.casting('Ivan','Iron-Man');
        assert.equal(filmStudio.films[0].filmRoles[0].actor,"Ivan")
    });
});
