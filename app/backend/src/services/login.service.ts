import * as bcryptjs from 'bcryptjs';
import JWT from '../utils/jwt';
import User from '../database/models/User.model';

class LoginService {
  constructor(public jwt = new JWT()) { }

  serviceLogin = async (email: string, password: string) => {
    const newLogin = await User.findOne({ where: { email } });

    if (!newLogin) {
      return { type: 'UNAUTHORIZED', message: 'Incorrect email or password' };
    }

    const passwordCompare = await bcryptjs.compare(password, newLogin.password);

    if (passwordCompare === false) {
      return { type: 'UNAUTHORIZED', message: 'Incorrect email or password' };
    }

    const token = this.jwt.createToken(newLogin);
    return { type: null, message: token };
  };
}

export default LoginService;
