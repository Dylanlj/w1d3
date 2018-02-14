function letterIndex(line){
  var letterPositioning = {};
  for(var i = 0; i < line.length; i++){
    if(letterPositioning[line[i]] === "object"){
      letterPositioning[line[i]].push(i);
      continue;
    }
    letterPositioning[line[i]] = [i];
  } 
  delete letterPositioning[' ']
  return letterPositioning;
}
console.log(letterIndex("lighthouse in the house"));