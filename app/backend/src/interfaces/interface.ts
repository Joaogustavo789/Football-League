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

export {
  IUser,
  IJwtload,
  IMatche,
};
