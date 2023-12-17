const assert = require('chai').assert;
const index = require('../src/index');

describe('Index Test', function() {
    it('should return true', function() {
        let result = index.someFunction();
        assert.equal(result, true);
    });
});