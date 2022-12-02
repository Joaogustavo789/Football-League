import { Request, Response } from 'express';
import LeaderBoardService from '../services/leaderboard.service';

class LeaderBoardController {
  constructor(public leaderBoardService = new LeaderBoardService()) { }

  controllerLeaderBoardGet = async (_req: Request, res: Response) => {
    const { message } = await this.leaderBoardService.serviceLeaderboardGet();

    return res.status(200).json(message);
  };
}

export default LeaderBoardController;
