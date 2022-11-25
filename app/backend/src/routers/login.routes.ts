import { Router } from 'express';
import validateEmail from '../middlewares/validateEmail';
import LoginController from '../controllers/login.controller';
import validateToken from '../middlewares/validateToken';

const loginRouter = Router();

const loginController = new LoginController();

loginRouter.post('/', validateEmail, loginController.controllerLogin);

loginRouter.get('/validate', validateToken);

export default loginRouter;
