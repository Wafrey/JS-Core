let mathEnforcer = require('./problem6');

let expect = require('chai').expect;
let assert = require('chai').assert;
describe("mathEnforcer", function() {
 
 
    describe("addFive", function() {
        it("should return undefined when no parameters are given", () => {
            let result = mathEnforcer.addFive();
            assert.isUndefined(result);
        });
 
       
        it("should return undefined for invalid type of the parameter", () => {
            let input = "test";
            let result = mathEnforcer.addFive(input);
            assert.isUndefined(result);
        });
 
        it("should return NaN for invalid type of the parameter", () => {
            let input = NaN;
            let result = mathEnforcer.addFive(input);
            assert.isNaN(result);
        });
 
        it("should return 7.12 for floating point number as a parameter", () => {
            let input = 2.12;
            let result = mathEnforcer.addFive(input);
            assert.closeTo(result, 7.12, 0.01);
        });
 
        it("should return 7 for 2 number as a parameter", () => {
            let input = 2;
            let result = mathEnforcer.addFive(input);
            assert.equal(result, 7);
        });
 
        it("should return -3 for -8 number as a parameter", () => {
            let input = -8;
            let result = mathEnforcer.addFive(input);
            assert.equal(result, -3);
        });
    });
   
    describe("subtractTen", function() {
        it("should return undefined when no parameter is given", () => {
            let result = mathEnforcer.subtractTen();
            assert.isUndefined(result);
        });
       
        it("should return undefined for invalid type of the parameter", () => {
            let input = "test";
            let result = mathEnforcer.subtractTen(input);
            assert.isUndefined(result);
        });
 
        it("should return NaN for invalid type of the parameter", () => {
            let input = NaN;
            let result = mathEnforcer.subtractTen(input);
            assert.isNaN(result);
        });
       
        it("should return 10 for integer number as a parameter", () => {
            let input = 20;
            let result = mathEnforcer.subtractTen(input);
            assert.equal(result, 10);
        });
 
        it("should return -20 for -10 as a parameter", () => {
            let input = -10;
            let result = mathEnforcer.subtractTen(input);
            assert.equal(result, -20);
        });
 
 
        it("should return -10 for 0 number as a parameter", () => {
            let input = 0;
            let result = mathEnforcer.subtractTen(input);
            assert.equal(result, -10);
        });
 
        it("should return 10.1 for floating point number as a parameter", () => {
            let input = 20.1;
            let result = mathEnforcer.subtractTen(input);
            assert.closeTo(result, 10.1, 0.01);
        });
    });
   
    describe("sum", function() {
        it("should return undefined when no parameter is given", () => {
            let result = mathEnforcer.sum();
            assert.isUndefined(result);
        });
 
        it("should return undefined for invalid type of the parameter", () => {
            let input = "test";
            let result = mathEnforcer.sum(2, input);
            assert.isUndefined(result);
        });
       
        it("should return undefined for invalid type of the parameter", () => {
            let input = "test";
            let result = mathEnforcer.sum(input, 2);
            assert.isUndefined(result);
        });
 
        it("should return NaN for invalid type of the parameter", () => {
            let input = NaN;
            let result = mathEnforcer.sum(input, input);
            assert.isNaN(result);
        });
 
        it("should return 10 for 5 as a parameter", () => {
            let input = 5;
            let result = mathEnforcer.sum(input, input);
            assert.equal(result, 10);
        });
 
        it("should return 0 for 0, 0 as a parameter", () => {
            let input = 0;
            let secondInput = 0;
            let result = mathEnforcer.sum(input, secondInput);
            assert.equal(result, 0);
        });
 
        it("should return 0 for 5, -5 as a parameter", () => {
            let input = 5;
            let secondInput = -5;
            let result = mathEnforcer.sum(input, secondInput);
            assert.equal(result, 0);
        });
 
        it("should return -10 for -5, -5 as a parameter", () => {
            let input = -5;
            let secondInput = -5;
            let result = mathEnforcer.sum(input, secondInput);
            assert.equal(result, -10);
        });
 
        it("should return 5.5 for 2.75 as a parameter", () => {
            let input = 2.75;
            let result = mathEnforcer.sum(input, input);
            assert.closeTo(result, 5.5, 0.01);
        });
    });
});