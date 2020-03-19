var add = function(first, second) {
  return first + second;
};

var multiply = function(one, two) {
  return one * two;
};

var areArraysSame = function(a, b) {
  if (a.length !== b.length) {
    return false;
  }

  for (var i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }
  return true;
};
