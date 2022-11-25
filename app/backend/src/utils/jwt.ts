import * as jwt from 'jsonwebtoken';
import IUser from '../interfaces/interface';

class JWT {
  createToken = (user: IUser) => {
    const data = { id: user.id, username: user.username, role: user.role, email: user.email };
    return jwt.sign(data, process.env.JWT_SECRET as string, {
      expiresIn: '15d',
      algorithm: 'HS256',
    });
  };
}

export default JWT;
