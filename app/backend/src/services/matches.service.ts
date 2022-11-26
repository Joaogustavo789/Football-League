import Matche from '../database/models/Matche.model';
import Team from '../database/models/Team.model';

class MatchesService {
  serviceMatchesGet = async () => {
    const allMatches = await Matche.findAll({
      include: [
        {
          model: Team,
          as: 'teamHome',
          attributes: { exclude: ['id'] },
        },

        {
          model: Team,
          as: 'teamAway',
          attributes: { exclude: ['id'] },
        },

      ],
    });

    return { type: null, message: allMatches };
  };
}

export default MatchesService;
