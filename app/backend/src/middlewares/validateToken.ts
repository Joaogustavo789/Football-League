import { NextFunction, Request, Response } from 'express';
import JWT from '../utils/jwt';

const validateToken = (req: Request, res: Response, next: NextFunction) => {
  const jwt = new JWT();
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }

  const tokenValid = jwt.verifyToken(authorization);

  if (tokenValid.type) {
    return res.status(401).json({ message: tokenValid.message });
  }

  req.body.user = tokenValid.data;
  // console.log(authorization, 'to aqui viuuum');

  next();
};

export default validateToken;
