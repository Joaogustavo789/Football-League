import { NextFunction, Request, Response } from 'express';
import JWT from '../utils/jwt';

const validateToken = async (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }

  const jwt = new JWT();

  const validToken = jwt.verifyToken(authorization);

  if (validToken.type) {
    return res.status(401).json({ message: validToken.message });
  }

  req.body.user = validToken.data;

  next();
};

export default validateToken;
