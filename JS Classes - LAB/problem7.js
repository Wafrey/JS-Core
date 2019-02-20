
describe('Tests', function () {
    // Check if functions are attached to proto
    it('append exists', function () {
       expect(StringBuilder.prototype.hasOwnProperty('append')).to.equal(true);
    });
    it('prepend exists', function () {
        expect(StringBuilder.prototype.hasOwnProperty('prepend')).to.equal(true);
    });
    it('insertAt exists', function () {
        expect(StringBuilder.prototype.hasOwnProperty('insertAt')).to.equal(true);
    });
    it('remove exists', function () {
        expect(StringBuilder.prototype.hasOwnProperty('remove')).to.equal(true);
    });
    it('toString exists', function () {
        expect(StringBuilder.prototype.hasOwnProperty('toString')).to.equal(true);
    });
 
    // Initialization/toString tests
    it('create an instance with string', function () {
        let builder = new StringBuilder('Kiro');
        expect(builder.toString()).to.equal('Kiro', 'String Builder did not create correct instance!');
    });
    it('create an instance without a string', function () {
        let builder = new StringBuilder();
        expect(builder.toString()).to.equal('', 'String Builder did not create correct instance!')
    });
    it('create a wrong instance (should throw)', function () {
        expect(() => new StringBuilder(5)).to.throw(TypeError, 'Argument must be string')
    });
 
    //Appending tests
    it('append one string', function () {
        let builder = new StringBuilder();
        builder.append('Kiruo');
        expect(builder.toString()).to.equal('Kiruo', 'String Builder did not append correctly!');
    });
    it('append a couple of strings', function () {
        let builder = new StringBuilder();
        builder.append('Kiruo');
        builder.append('Alisa');
        builder.append('Mici');
        expect(builder.toString()).to.equal('KiruoAlisaMici', 'String Builder did not append correctly!');
    });
    it('append a non-string', function () {
        let builder = new StringBuilder();
        expect(() => builder.append(5)).to.throw(TypeError, 'Argument must be string')
    });
 
    //Prepending tests
    it('prepend one string', function () {
        let builder = new StringBuilder('Kiro');
        builder.prepend('Toi e ');
        expect(builder.toString()).to.equal('Toi e Kiro', 'String Builder did not prepend correctly!');
    });
    it('prepend a couple of strings', function () {
        let builder = new StringBuilder('Ole!');
        builder.prepend('Kiro ');
        builder.prepend('samo ');
        builder.prepend('I ');
        expect(builder.toString()).to.equal('I samo Kiro Ole!', 'String Builder did not prepend correctly!');
    });
    it('prepend a non-string', function () {
        let builder = new StringBuilder();
        expect(() => builder.prepend(5)).to.throw(TypeError, 'Argument must be string')
    });
 
    //InsertAt tests
    it('insert at beginning', function () {
        let builder = new StringBuilder('Kircata!');
        builder.insertAt('Toi e ', 0);
        expect(builder.toString()).to.equal('Toi e Kircata!', 'String Builder did not insert correctly!');
    });
    it('insert at end', function () {
        let builder = new StringBuilder('Kircata!');
        builder.insertAt('AAA', 8);
        expect(builder.toString()).to.equal('Kircata!AAA', 'String Builder did not insert correctly!');
    });
    it('insert at middle', function () {
        let builder = new StringBuilder('Kircata!');
        builder.insertAt('AAA', 5);
        expect(builder.toString()).to.equal('KircaAAAta!', 'String Builder did not insert correctly!');
    });
    it('insert new test', function () {
        let str = 'wtf';
        let builder = new StringBuilder('lol');
        builder.insertAt(str, 0);
        let expected = Array.from('lol');
        expected.splice(0, 0, ...str);
        compareArray(builder._stringArray, expected);
    });
    it('insert non-string', function () {
        let builder = new StringBuilder('Kircata!');
        expect(() => builder.insertAt(5, 0)).to.throw(TypeError, 'Argument must be string')
    });
 
    //Remove tests
    it('remove from start', function () {
        let builder = new StringBuilder('Kircata!');
        builder.remove(0, 2);
        expect(builder.toString()).to.equal('rcata!', 'String Builder did not remove correctly!')
    });
    it('remove at end', function () {
        let builder = new StringBuilder('Kircata!');
        builder.remove(5, 3);
        expect(builder.toString()).to.equal('Kirca', 'String Builder did not remove correctly!')
    });
 
    //toString
    it('toString test', function () {
        let builder = new StringBuilder('lol');
        expect(builder.toString()).to.equal('lol');
    });
    function compareArray(source, expected) {
        expect(source.length).to.equal(expected.length, "Arrays don't match");
        for (let i = 0; i < source.length; i++) {
            expect(source[i]).to.equal(expected[i], 'Element ' + i + ' mismatch');
        }
    }
});