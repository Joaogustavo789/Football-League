import { Request, Response } from 'express';
import LoginService from '../services/login.service';
import { IJwtload } from '../interfaces/interface';

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

  controllerLoginToken = async (req: Request, res: Response) => {
    const { authorization } = req.headers;

    const response = await this.loginService.serviceLoginToken(authorization as string);

    if (response.type === 'UNAUTHORIZED') {
      return res.status(401).json({ message: response.message });
    }

    const resMessage = response.message as IJwtload;
    return res.status(200).json({ role: resMessage.role });
  };
}

export default LoginController;
