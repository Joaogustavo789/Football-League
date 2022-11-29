import { Request, Response } from 'express';
import MatchesService from '../services/matches.service';

class MatchesController {
  constructor(public matchesService = new MatchesService()) { }

  controllerMatchesGet = async (req: Request, res: Response) => {
    const { inProgress } = req.query;

    if (!inProgress) {
      const { message } = await this.matchesService.serviceMatchesGet();
      return res.status(200).json(message);
    }

    const trueOrFalse = (inProgress === 'true');

    const { message } = await this.matchesService.serviceMatchesGetQuery(trueOrFalse);

    return res.status(200).json(message);
  };

  controllerMatchesPost = async (req: Request, res: Response) => {
    const { homeTeam, awayTeam, homeTeamGoals, awayTeamGoals } = req.body;

    const { message } = await this.matchesService.serviceMatchesPost({
      homeTeam,
      awayTeam,
      homeTeamGoals,
      awayTeamGoals,
      inProgress: true,
    });

    return res.status(201).json(message);
  };
}

export default MatchesController;
