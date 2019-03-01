let extensions = (function(){


    Array.prototype.last = function () {

        return this[this.length - 1];
    }
    
    Array.prototype.skip = function (n) {
    
        return this.slice(n);
    }
    
    Array.prototype.take = function (n) {
        if (n < 0) {
            throw new RangeError('N must be inside the bounds of the array!');
        }
        return this.slice(0, n)
    }
    
    Array.prototype.sum=function(){
    
        return this.reduce((a,b) => a+b, 0)
    }
    
    Array.prototype.average=function(){
    
        return this.reduce((a,b) => a+b, 0) / this.length
    }
}())

