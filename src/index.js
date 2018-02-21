/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var count = 0;
  var summ = [];
  console.log(preferences.length);
  for (var i=0; i<preferences.length; i++)
  { 
    if ((i+1 == preferences[preferences[preferences[i]-1]-1])&&(preferences[i]!==preferences[preferences[preferences[i]-1]-1])){
      //console.log(i,preferences[preferences[preferences[i]-1]-1]);
      if ((summ.indexOf(preferences[i])==-1)&&(summ.indexOf(preferences[preferences[i]-1])==-1)&&(summ.indexOf(preferences[preferences[preferences[i]-1]-1]))==-1){
        count++;
      }
      summ.push(preferences[i]);
      summ.push(preferences[preferences[i]-1]);
      summ.push(preferences[preferences[preferences[i]-1]-1]);
    }
  }
  //console.log(count);

  return count;
};