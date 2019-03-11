let lookupChar = require('./problem5');

let expect = require('chai').expect;
let assert = require('chai').assert;


describe('Lookup Char', function () {

            it('should return undefined if we pass number and string', function () {

                let string="Some string";
                let number=23;

                let expected = lookupChar(number, string);

                expect(expected).to.equal('Incorrect index');
            });

            it('should return undefined if we pass two numbers', function () {

                let firstNum=12;
                let secondNum=23;

                let expected = lookupChar(firstNum, secondNum);

                expect(expected).to.equal(undefined);
            });

            it('should return undefined if we pass two srings', function () {

                let firstString="Some string";
                let secondString="sddsdsa";

                let expected = lookupChar(firstString, secondString);

                expect(expected).to.equal(undefined);
            });

            it('should return undefined if we pass floating point and string', function () {

                let string="Some string";
                let number=8.5;

                let expected = lookupChar(string, number);

                expect(expected).to.equal(undefined);
            });

            it('should return Incorrect index if both parameters are of the correct type', function () {

                let str="Somestr";
                let num=7;

                let expected = lookupChar(str, num);

                expect(expected).to.equal('Incorrect index');
            });

            it('should return Incorrect index if both parameters are of the correct type', function () {

                let str="Somestr";
                let num=-10;

                let expected = lookupChar(str, num);

                expect(expected).to.equal('Incorrect index');
            });

            it('should return Incorrect index if we pass empty string', function () {

                let str="";
                let num=0;

                let expected = lookupChar(str, num);

                expect(expected).to.equal('Incorrect index');
            });

            it('should return the character at the specified index if both parameters have correct types and values', function () {

                let str="Somestr";
                let num=3;

                let expected = lookupChar(str, num);

                expect(expected).to.equal('e');
            });

        })