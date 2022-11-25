import { Router } from 'express';
import validateEmail from '../middlewares/validateEmail';
import LoginController from '../controllers/login.controller';

const loginRouter = Router();

const loginController = new LoginController();

loginRouter.post('/', validateEmail, loginController.controllerLogin);

export default loginRouter;
