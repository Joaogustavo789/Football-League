import { Request, Response } from 'express';
import LeaderBoardService from '../services/leaderboard.service';

class LeaderBoardController {
  constructor(public leaderBoardService = new LeaderBoardService()) { }

  controllerLeaderBoardHomeGet = async (_req: Request, res: Response) => {
    const { message } = await this.leaderBoardService.serviceLeaderboardHomeGet();

    return res.status(200).json(message);
  };

  controllerLeaderBoardAwayGet = async (_req: Request, res: Response) => {
    const { message } = await this.leaderBoardService.serviceLeaderBoardAwayGet();

    return res.status(200).json(message);
  };

  controllerLeaderBoardGet = async (_req: Request, res: Response) => {
    const { message } = await this.leaderBoardService.serviceLeaderBoardGet();

    return res.status(200).json(message);
  };
}

export default LeaderBoardController;
