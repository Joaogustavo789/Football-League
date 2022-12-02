import { Router } from 'express';
import LeaderBoardController from '../controllers/leaderboard.controller';

const leaderboardRouter = Router();

const leaderBoardController = new LeaderBoardController();

leaderboardRouter.get('/home', leaderBoardController.controllerLeaderBoardGet);

export default leaderboardRouter;
