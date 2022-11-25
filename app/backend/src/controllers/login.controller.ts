import { Request, Response } from 'express';
import LoginService from '../services/login.service';

class LoginController {
  loginService = new LoginService();
  controllerLogin = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const { message } = await this.loginService.serviceLogin(email, password);
    return res.status(200).json(message);
  };
}

export default LoginController;
