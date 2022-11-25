// import * as bcryptjs from 'bcryptjs';
import JWT from '../utils/jwt';
import User from '../database/models/User.model';
// import IUser from '../interfaces/interface';

class LoginService {
  jwt = new JWT();
  serviceLogin = async (email: string, password: string) => {
    console.log(email, password);
    const newLogin = await User.findOne({ where: { email } });

    // bcryptjs.hash(password, 10);

    // const token = this.jwt.createToken(newLogin);
    // console.log(newLogin);
    return { type: null, message: newLogin };
  };
}

export default LoginService;
