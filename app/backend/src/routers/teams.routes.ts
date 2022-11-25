import { Router } from 'express';
import TeamsController from '../controllers/teams.controller';

const teamsRouter = Router();

const teamsController = new TeamsController();

teamsRouter.get('/', teamsController.controllerTeamsGet);

export default teamsRouter;
