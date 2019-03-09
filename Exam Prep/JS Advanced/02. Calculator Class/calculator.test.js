const Calculator = require('./calculator');
const assert = require('chai').assert;

describe('Calucator', function() {
    let calculator;

    beforeEach(function(){
        calculator = new Calculator();
    });
    
    it('Contains a property expenses that is initialized to an empty array. ', function() {
        assert.isArray(calculator.expenses);     
        assert.isEmpty(calculator.expenses);
    });

    describe('Function add(data) – adds the passed in item (of any type) to the expenses.', function() {
        it('Add primitive', function() {
            calculator.add(5);
            calculator.add('text');
            calculator.add(1.5);
            calculator.add(true);

            assert.deepEqual(calculator.expenses, [5, 'text', 1.5, true])
        });

        it('Add reference', function() {
            calculator.add({key: 'value'});
            calculator.add([1]);
            // calculator.add(function() {}); !!!!!!!

            assert.deepEqual(calculator.expenses, [{ key: 'value' }, [ 1 ]]);
        });
    }); 

    describe('Function divideNums()', function() {
        it('standard 2', function() {
            calculator.add(100);
            calculator.add(2);

            assert.equal(calculator.divideNums(), 50);
        });
        
        it('standard 3', function() {
            calculator.add(100);
            calculator.add(2);
            calculator.add(5);

            assert.equal(calculator.divideNums(), 10);
        });

        it('no input', function() {
            assert.throw(() => calculator.divideNums(), 'There are no numbers in the array!');
        });

        it('no number input', function() {
            calculator.add('pesho')
            calculator.add({})
            calculator.add('gosho')
            // Number as string

            assert.throw(() => calculator.divideNums(), 'There are no numbers in the array!');
        });

        it('division with floats', function() {
            calculator.add(10.5)
            calculator.add(2)

            assert.closeTo(calculator.divideNums(), 5.25, 0.01);
        });

        
        it('division with zero', function() {
            calculator.add(10.5);
            calculator.add(0);

            assert.equal(calculator.divideNums(), 'Cannot divide by zero');
        });
    });

    describe('Function toString()', function() {
        it('standard', function() {
            calculator.add(10);
            calculator.add('Pesho');
            calculator.add(5);

            assert.equal(calculator.toString(), '10 -> Pesho -> 5');
        });

        it('one input', function() {
            calculator.add(1);

            // assert.strictEqual(calculator.toString(), '1');
            assert.equal(calculator.toString(), '1');
        });

        it('no input', function() {
            assert.equal(calculator.toString(), 'empty array');
        });
    });

    describe('Function orderBy() ', function() {
        it('standard', function() {
            calculator.add(10);
            calculator.add(-3);
            calculator.add(30);
            calculator.add(1);
            // Floats !!
    
            assert.equal(calculator.orderBy(), '-3, 1, 10, 30');
        });

        it('non numbers', function() {
            calculator.add({});
            calculator.add([1,2,3]);
            calculator.add('pesho');

            assert.equal(calculator.orderBy(), '1,2,3, [object Object], pesho');
        });

        it('mixed values', function() {
            calculator.add({});
            calculator.add([1,2,3]);
            calculator.add(100);
            calculator.add('pesho');
            calculator.add(-100);

            assert.equal(calculator.orderBy(), '-100, 1,2,3, 100, [object Object], pesho');
        });
    });
});