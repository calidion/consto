import assert from 'assert';
import consto from '../lib';

describe('consto', function () {
  it('should be able to define consts with upper case', function () {
    var keys = ['a', 'b', 'c', 'd'];
    var consts = consto(keys);
    for(var i = 0; i < keys.length; i++) {
      assert.equal(true, consts[keys[i]] === undefined);
      assert.equal(true, consts[keys[i].toUpperCase()] !== null);
    }
  });

  it('should be able to define consts with free style', function () {
    var keys = ['a', 'b', 'C', 'd'];
    var consts = consto(keys, true);
    for(var i = 0; i < keys.length; i++) {
      assert.equal(true, consts[keys[i]] !== null);
      assert.equal(true, consts[keys[i]] === keys[i]);
    }
  });

  it('should not pass none array keys', function () {
    var keys = '';
    var consts = consto(keys, true);
    assert.equal(true, !consts);
  });

  it('should not have non string items', function () {
    var keys = ['a', {}, 'c', 'd'];
    var consts = consto(keys, true);
    assert.equal(true, !consts);
  });
});
