import { Router } from 'express';
import MatchesController from '../controllers/matches.controller';

const matcheRouter = Router();

const matchesController = new MatchesController();

matcheRouter.get('/', matchesController.controllerMatchesGet);

export default matcheRouter;
