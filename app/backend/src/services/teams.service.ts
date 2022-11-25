import Team from '../database/models/Team.model';

class TeamsService {
  serviceTeamsGet = async () => {
    const soccerClub = await Team.findAll();
    return { type: null, message: soccerClub };
  };
}

export default TeamsService;
