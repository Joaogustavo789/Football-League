import { Request, Response } from 'express';
import LoginService from '../services/login.service';

class LoginController {
  constructor(public loginService = new LoginService()) { }

  controllerLogin = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const { type, message } = await this.loginService.serviceLogin(email, password);

    if (type === 'UNAUTHORIZED') {
      return res.status(401).json({ message });
    }

    return res.status(200).json({ token: message });
  };
}

export default LoginController;
