interface IUser {
  id: number;
  username: string;
  role: string
  email: string;
  password?: string;
}

interface IJwtload {
  id: number,
  username: string,
  role: string,
  email: string,
  iat: number,
  exp: number
}

export {
  IUser,
  IJwtload,
};
