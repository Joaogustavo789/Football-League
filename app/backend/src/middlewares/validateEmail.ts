import { NextFunction, Request, Response } from 'express';
import emailObjectSchema from './schemas';

const validateEmail = (req: Request, res: Response, next: NextFunction) => {
  const { error } = emailObjectSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ message: 'All fields must be filled' });
  }

  next();
};

export default validateEmail;
