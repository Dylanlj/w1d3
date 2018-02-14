function countLetters(line){
  var numberCount = {};
  var string = line.split(' ');
  string = string.join();
  console.log(string);

  for(var i = 0; i < string.length; i++){
     if(numberCount[string[i]] >= 1){
        numberCount[string[i]] += 1;
        continue;
      }
      numberCount[string[i]] = 1;
  } 
  return numberCount;
}
console.log(countLetters("lighthouse in the house"));

// now you just need to get rid of the commas