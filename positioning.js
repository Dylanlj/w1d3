function countLetters(line){
  var letterPositioning = {};
  for(var i = 0; i < line.length; i++){
    if(typeof letterPositioning[line[i]] === "object"){
      letterPositioning[line[i]].push(i);
      continue;
    }
    letterPositioning[line[i]] = [i];
  } 
  delete letterPositioning[' ']
  return letterPositioning;
}
console.log(countLetters("lighthouse in the house"));