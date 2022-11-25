import Team from '../database/models/Team.model';

class TeamsService {
  serviceTeamsGet = async () => {
    const soccerClubs = await Team.findAll();

    return { type: null, message: soccerClubs };
  };

  serviceTeamsGetId = async (id: number) => {
    const soccerClub = await Team.findOne({ where: { id } });

    return { type: null, message: soccerClub };
  };
}

export default TeamsService;
