interface IUser {
  id: number,
  username: string,
  role: string
  email: string,
  password?: string,
}

interface IJwtload {
  id: number,
  username: string,
  role: string,
  email: string,
  iat: number,
  exp: number
}

interface IMatche {
  homeTeam: number,
  awayTeam: number,
  homeTeamGoals: number,
  awayTeamGoals: number,
  inProgress: boolean,
}

interface ILeaderBoard {
  name: string,
  totalPoints: number,
  totalGames: number,
  totalVictories: number,
  totalDraws: number,
  totalLosses: number,
  goalsFavor: number,
  goalsOwn: number,
  goalsBalance: number,
  efficiency: string,
}

interface IVictorie {
  victories: number,
  draw: number,
  losses: number,
  goalsFavor: number,
  goalsOwn: number,
}

export {
  IUser,
  IJwtload,
  IMatche,
  ILeaderBoard,
  IVictorie,
};
