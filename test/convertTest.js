const assert = require('chai').assert;
const convert = require('../convert');

describe('Convert', function(){
    it('convert should return "You entered an empty value"', function(){
        assert.equal(convert(), "You entered an empty value");
    });

    it('convert should return "The value you entered is not a number"', function(){
        assert.equal(convert("56a"), "The value you entered is not a number");
    });

    it('convert should return "Pling"', function(){
        assert.equal(convert(6), "Pling");
        assert.equal(convert(9), "Pling");
    });

    it('convert should return "Plang"', function(){
        assert.equal(convert(5), "Plang");
        assert.equal(convert(10), "Plang");
    });

    it('convert should return "Plong"', function(){
        assert.equal(convert(7), "Plong");
    });

    it('convert should return "PlingPlang"', function(){
        assert.equal(convert(15), "PlingPlang");
    });

    it('convert should return "PlingPlong"', function(){
        assert.equal(convert(21), "PlingPlong");
    });

    it('convert should return "PlingPlangPlong"', function(){
        assert.equal(convert(105), "PlingPlangPlong");
    });

    it('convert should return "34"', function(){
        assert.equal(convert(34), "34");
    });
});