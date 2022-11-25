import { Request, Response } from 'express';
import TeamsService from '../services/teams.service';

class TeamsController {
  constructor(public teamsService = new TeamsService()) { }

  controllerTeamsGet = async (_req: Request, res: Response) => {
    const { message } = await this.teamsService.serviceTeamsGet();

    return res.status(200).json(message);
  };

  controllerTeamsGetId = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { message } = await this.teamsService.serviceTeamsGetId(Number(id));

    return res.status(200).json(message);
  };
}

export default TeamsController;
