var data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"]
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"]
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06"]
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"]
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"]
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"]
  }
};

//returns array of people who they are following
function followingIds(idNum){
    var followId = data[idNum]['follows']
    return followId;
}


function whoFollowsWho (){
  for(var idNum in data){
    var followingArray = followingIds(idNum);
    var theyFollow = data[idNum]['name'] + ' follows: ';
    for(var i = 0; i < followingArray.length; i++){
      theyFollow += data[followingArray[i]]['name'] + ' ';
    }
    return theyFollow;
  }
}
//console.log(whoFollowsWho())

function whoFollowsTheMostPeople(){
  var followingNum = 0;
  var theirName = '' ;
  for(var idNum in data){
    if(followingIds(idNum).length > followingNum){
      followingNum = followingIds(idNum).length;
      theirName = data[idNum]['name']
    }
  }
  return theirName + ' follows the most people'
}
//console.log(whoFollowsTheMostPeople())



function followsOldPeople(){
  var objectFollowers = objectOfPeople()
  for(var idNum in data){
    var followingArray = data[idNum]['follows'];
    for(i = 0; i < followingArray.length; i++){
      if(data[followingArray[i]]['age'] > 30){
        objectFollowers[idNum] += 1
      }

    }
  }
return theMost(objectFollowers) + 'follow the most people over 30'
}

//console.log(followsOldPeople())


function whoIsFollowedMost(){
  var followers = {
  }
  for(var idNum in data){
    followers[idNum] = 0;
  }
  for(var idNum in data){
    var followingArray = followingIds(idNum);
    for(var i = 0; i < followingArray.length; i++){
      followers[followingArray[i]] += 1;
    }
  }
  return theMost(followers) + 'have the most followers';
}
//console.log(whoIsFollowedMost())


function followedByOld(){
  var followers = objectOfPeople();

  for(var idNum in data){
    var followingArray = followingIds(idNum);
      if(data[idNum]['age'] < 30){
        continue
      }
    for(var i = 0; i < followingArray.length; i++){
      followers[followingArray[i]] += 1;
    }
  }
  var mostFollowed = theMost(followers);
  return mostFollowed + 'have the most above 30 followers';
}
//console.log(followedByOld())

function objectOfPeople(){
    var followers = {
  }
  for(var idNum in data){
    followers[idNum] = 0;
  }
  return followers;
}


function theMost(object){
  var highestNum = 0;
  var highestId = [];
  for(var idNum in object){


    if(object[idNum] > highestNum){
      highestId.splice(0, highestId.length)
      highestId[0] = idNum;
      highestNum = object[idNum]
    }
    else if(object[idNum] === highestNum){
      highestId.push(idNum)
    }
  }
  for(i = 0; i < highestId.length; i++){
    highestId[i] = data[highestId[i]]['name']
  }
  var highestNames = '';
  for(i = 0; i < highestId.length; i++ ){
    highestNames += highestId[i] + ', ';
  }
  return highestNames;
}

function followBack(){




}

console.log(followback())





