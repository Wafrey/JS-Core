const assert=require('chai').assert;
const subSum=require('./problem1');

describe('subSum', function(){

    it('should work properly', function(){

      let arr=[1, 2, 3, 4, 5, 6, 7, 8, 9];

      let result=subSum(arr, 3, 5);

      assert.equal(result, 15);
    });


    it('first argument must be array', function(){

        let arr=[1, 2, 3, 4, 5, 6, 7, 8, 9];
  
        let result=subSum(arr, 3, 5);
  
        assert.equal(result, 16);
        
      });
})

