import { Router } from 'express';
import TeamsController from '../controllers/teams.controller';

const teamsRouter = Router();

const teamsController = new TeamsController();

teamsRouter.get('/', teamsController.controllerTeamsGet);

teamsRouter.get('/:id', teamsController.controllerTeamsGetId);

export default teamsRouter;
