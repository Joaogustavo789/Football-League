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
}

export default MatchesController;
