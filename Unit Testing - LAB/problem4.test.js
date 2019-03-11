let isOddOrEven = require('./problem4');

let expect = require('chai').expect;
let assert = require('chai').assert;

describe('Even or Odd', function(){

    it('should return undefined if we pass a number', function(){
        let number = 20;
        let expected= isOddOrEven(number);

        expect(expected).to.equal(undefined);
    });

    it('should return even if we pass a string with even length', function(){
        let str = "Toni";
        let expected= isOddOrEven(str);

        expect(expected).to.equal('even');
    });

    it('should return odd if we pass a string with odd length', function(){
        let str = "Ton";
        let expected= isOddOrEven(str);

        expect(expected).to.equal('odd');
    });
})