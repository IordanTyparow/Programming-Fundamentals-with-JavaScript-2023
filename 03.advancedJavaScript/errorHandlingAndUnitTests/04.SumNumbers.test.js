let sum = require('./04.SumNumbers');
let expect = require('chai').expect;

describe('Sum of Numbers', ()=> {
    it('sum array numbers', ()=> {
        let arr = [1,2,3,4,5];
        let result = 15;
    
        let resNumber = sum(arr);
    
        expect(resNumber).to.be.equal(result);
    });
    it('Sum whit zero',()=> {
        let arr = [0, 0, 0, 0];
        let result = 0;

        let resNumber = sum(arr);
        
        expect(resNumber).to.equal(result);
    });
});
