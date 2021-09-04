const team = {
    _players: [
      {
        firstName: 'Brandon',
        lastName: 'McManus',
        age: 30,
      },
      {
        firstName: 'Von',
        lastName: 'Miller',
        age: 32,
      },
      {
        firstName: 'Drew',
        lastName: 'Lock',
        age: 24,
      }
    ],
    _games: [
      {
        opponent: 'Vikings',
        teamPoints: 33,
        opponentPoints: 6,
      },
      {
        opponent: 'Seahawks',
        teamPoints: 30,
        opponentPoints: 3,
      },
      {
        opponent: 'Rams',
        teamPoints: 17,
        opponentPoints: 12,
      }
    ],
    get players() {
      return this._players;
    },
    get games() {
      return this._games;
    },
    addPlayer(firstName, lastName, age) {
      const player = {
      firstName,
      lastName,
      age,
      };
      this._players.push(player);
    },
    addGame(opponent, teamPoints, opponentPoints) {
      const game = {
        opponent,
        teamPoints,
        opponentPoints
      };
      this._games.push(game);
    }
  };
  
  team.addPlayer('Teddy', 'Bridgewater', 28);
  team.addPlayer('Tim', 'Patrick', 27);
  team.addPlayer('KJ', 'Hamlet', 22);
  
  team.addGame('Giants', 26, 12);
  team.addGame('Jaguars', 32, 10);
  team.addGame('Jets', 16, 14);
  
  console.log(team.players);
  console.log(team.games);
  
  