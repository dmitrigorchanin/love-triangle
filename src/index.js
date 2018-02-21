/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var count = 0;
  var summ = [];
  for (var i=0; i<preferences.length; i++)
  { 
    if ((i+1 == preferences[preferences[preferences[i]-1]-1])&&(preferences[i]!==preferences[preferences[preferences[i]-1]-1])){
      //console.log(i,preferences[preferences[preferences[i]-1]-1]);
      if (summ.indexOf(preferences[i]+preferences[preferences[i]-1]+preferences[preferences[preferences[i]-1]-1])==-1){
        count++;
      }
      summ.push(preferences[i]+preferences[preferences[i]-1]+preferences[preferences[preferences[i]-1]-1])
    }
  }
  console.log(count);

  return count;
};