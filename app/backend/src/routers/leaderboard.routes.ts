import { Router } from 'express';
import LeaderBoardController from '../controllers/leaderboard.controller';

const leaderboardRouter = Router();

const leaderBoardController = new LeaderBoardController();

leaderboardRouter.get('/home', leaderBoardController.controllerLeaderBoardHomeGet);

leaderboardRouter.get('/away', leaderBoardController.controllerLeaderBoardAwayGet);

leaderboardRouter.get('/', leaderBoardController.controllerLeaderBoardGet);

export default leaderboardRouter;
