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

    const { type, message } = await this.matchesService.serviceMatchesPost({
      homeTeam,
      awayTeam,
      homeTeamGoals,
      awayTeamGoals,
      inProgress: true,
    });

    if (type === 'NOT_FOUND') {
      return res.status(404).json({ message });
    }

    if (type === 'INVALID_VALUE') {
      return res.status(422).json({ message });
    }

    return res.status(201).json(message);
  };

  controllerMatchesPatch = async (req: Request, res: Response) => {
    const { id } = req.params;

    const inProgress = false;

    const { message } = await this.matchesService.serviceMatchesPatch(inProgress, Number(id));

    return res.status(200).json({ message });
  };
}

export default MatchesController;
