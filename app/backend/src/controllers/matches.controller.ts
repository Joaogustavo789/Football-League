import { Request, Response } from 'express';
import MatchesService from '../services/matches.service';

class MatchesController {
  constructor(public matchesService = new MatchesService()) { }

  controllerMatchesGet = async (_req: Request, res: Response) => {
    const { message } = await this.matchesService.serviceMatchesGet();

    return res.status(200).json(message);
  };
}

export default MatchesController;
