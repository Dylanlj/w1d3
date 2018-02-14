function countLetters(line){
  var numberCount = {};
  for(var i = 0; i < line.length; i++){
    if(typeof numberCount[line[i]] === "object"){
      numberCount[line[i]].push(i);
      continue;
    }
    numberCount[line[i]] = [i];
  } 
  delete numberCount[' ']
  return numberCount;
}
console.log(countLetters("lighthouse in the house"));