module.exports = function longestConsecutiveLength(array) {
  var s = new Set(), ans = 0;
  for (var i = 0; i < array.length; i++){
      s.add(array[i])
  }

  for (var i = 0; i < array.length; i++){
      if (s.has(array[i] - 1)){ continue; }
      var res = 0;
      item = array[i];
      while (s.has(item)){
          res ++;
          item ++;
      }
      ans = Math.max(ans, res);
  }
  return ans;
};


