import { Router } from 'express';
import validateToken from '../middlewares/validateToken';
import MatchesController from '../controllers/matches.controller';

const matcheRouter = Router();

const matchesController = new MatchesController();

matcheRouter.get('/', matchesController.controllerMatchesGet);

matcheRouter.post('/', validateToken, matchesController.controllerMatchesPost);

matcheRouter.patch('/:id/finish', matchesController.controllerMatchesPatch);

export default matcheRouter;
