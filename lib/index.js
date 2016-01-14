module.exports = function(keys, noneUpper) {
  if (!(keys instanceof Array)) {
    return false;
  }
  noneUpper = noneUpper || false;
  var object = {};
  for(var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (typeof key !== 'string') {
      return false;
    }
    if (!noneUpper) {
      key = key.toUpperCase();
    }
    object[key] = key;
  }
  return object;
};
