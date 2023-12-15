function gameObject() {
  const game = {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["black", "white"],
      players: {
        "Alan Anderson": {
          number: "0",
          shoe: "16",
          points: "22",
          rebounds: "12",
          assissts: "12",
          steals: "3",
          blocks: "1",
          slamDunks: "1",
        },
        "Reggie Evans": {
          number: "30",
          shoe: "14",
          points: "12",
          rebounds: "12",
          assissts: "12",
          steals: "12",
          blocks: "12",
          slamDunks: "7",
        },
        "Brook Lopez": {
          number: "11",
          shoe: "17",
          points: "17",
          rebounds: "19",
          assissts: "10",
          steals: "3",
          blocks: "1",
          slamDunks: "15",
        },
        "Mason Plumlee": {
          number: "1",
          shoe: "19",
          points: "26",
          rebounds: "12",
          assissts: "6",
          steals: "3",
          blocks: "8",
          slamDunks: "5",
        },
        "Jason Terry": {
          number: "31",
          shoe: "15",
          points: "19",
          rebounds: "2",
          assissts: "2",
          steals: "4",
          blocks: "11",
          slamDunks: "1",
        },
      },
    },

    away: {
      teamName: "Charlotte Hornets",
      colors: ["turquoise", "purple"],
      players: {
        "Jeff Adrien": {
          number: "4",
          shoe: "18",
          points: "10",
          rebounds: "1",
          assissts: "1",
          steals: "2",
          blocks: "7",
          slamDunks: "2",
        },
        "Bismak Biyombo": {
          number: "0",
          shoe: "16",
          points: "12",
          rebounds: "4",
          assissts: "7",
          steals: "7",
          blocks: "15",
          slamDunks: "10",
        },
        "DeSagna Diop": {
          number: "2",
          shoe: "14",
          points: "24",
          rebounds: "12",
          assissts: "12",
          steals: "4",
          blocks: "5",
          slamDunks: "5",
        },
        "Ben Gordon": {
          number: "8",
          shoe: "15",
          points: "33",
          rebounds: "3",
          assissts: "2",
          steals: "1",
          blocks: "1",
          slamDunks: "0",
        },
        "Brendan Haywood": {
          number: "33",
          shoe: "15",
          points: "6",
          rebounds: "12",
          assissts: "12",
          steals: "22",
          blocks: "5",
          slamDunks: "12",
        },
      },
    },
  };
  return game;
}
//console.log(gameObject());

function teamNames() {
  const homeTeam = gameObject()["home"]["teamName"];
  const awayTeam = gameObject()["away"]["teamName"];
  const teamNamesObj = {};
  function addTeams(key, value) {
    teamNamesObj[key] = value;
  }
  addTeams("home", homeTeam);
  addTeams("away", awayTeam);
  //console.log(teamNamesObj)
  return teamNamesObj;
}
//console.log(teamNames());

function teamColors(teamName) {
  const teams = teamNames();
  if (teamName === teams["home"]) {
    return gameObject()["home"]["colors"];
  } else if (teamName === teams["away"]) {
    return gameObject()["away"]["colors"];
  }
  //console.log(teams["home"])
}
// console.log(teamColors("Brooklyn Nets"))
// console.log(teamColors("Charlotte Hornets"))

function playerNumbers(teamName) {
  const teams = teamNames();
  const homePlayersObj = gameObject()["home"]["players"];
  const awayPlayersObj = gameObject()["away"]["players"];
  let playerNumbersArr = [];
  // console.log(teams)
  // console.log(homePlayersObj);
  // console.log(awayPlayersObj)
  if (teamName === teams["home"]) {
    for (const key in homePlayersObj) {
      playerNumbersArr.push(homePlayersObj[key]["number"]);
    }
    return playerNumbersArr;
  } else if (teamName === teams["away"]) {
    for (const key in awayPlayersObj) {
      playerNumbersArr.push(awayPlayersObj[key]["number"]);
    }
    return playerNumbersArr;
  }
}

// console.log(playerNumbers("Brooklyn Nets"));
// console.log(playerNumbers("Charlotte Hornets"));
function combinePlayers(){
  const homePlayers = gameObject()["home"]["players"];
  const awayPlayers = gameObject()["away"]["players"];
  let allPlayers = {};
  for (const key in homePlayers){
    allPlayers[key] = homePlayers[key]
  }
  for (const key in awayPlayers){
    allPlayers[key] = awayPlayers[key]
  }
  //console.log(allPlayers);
  return allPlayers
}

function numPointsScored(playerName){
  const allPlayers = combinePlayers();
  //console.log(allPlayers);
  return allPlayers[playerName]["points"]
}
//console.log(numPointsScored("Alan Anderson"));

function shoeSize(playerName){
  const allPlayers = combinePlayers()
  return allPlayers[playerName]["shoe"]
}
//console.log(shoeSize("Alan Anderson"))

function playerStats(playerName){
  const allPlayers = combinePlayers()
  return allPlayers[playerName]
}
//console.log(playerStats("Alan Anderson"));

function bigShoeRebounds(){
  const allPlayersObj = combinePlayers();
  let allShoesObj = {}
  let largestShoeNum = 0;
  let biggestFoot = "";
  for (const key in allPlayersObj){
    allShoesObj[key] = allPlayersObj[key]["shoe"]
  }
  for (const key in allShoesObj){
    if (allShoesObj[key] > largestShoeNum){
      largestShoeNum = allShoesObj[key];
      biggestFoot = key;
    }
  }
  return allPlayersObj[biggestFoot]["rebounds"];
}
console.log(bigShoeRebounds());
/* functions we need to build:
1) numPointsScored:
2) shoeSize: 
3) teamColors:
4) teamNames
5) playerNumbers:
6) playerStats: 
7) bigShoeRebounds: finds the player with largest shoe size, returns that plays number of rebounds*/