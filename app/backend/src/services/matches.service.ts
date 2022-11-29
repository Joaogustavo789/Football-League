import Matche from '../database/models/Matche.model';
import { IMatche } from '../interfaces/interface';

class MatchesService {
  serviceMatchesGet = async () => {
    const allMatches = await Matche.findAll({
      include: {
        all: true,
        attributes: { exclude: ['id'] },
      },
    });

    return { type: null, message: allMatches };
  };

  serviceMatchesGetQuery = async (inProgress: boolean) => {
    const matchesInProgress = await Matche.findAll({
      include: {
        all: true,
        attributes: { exclude: ['id'] },
      },
      where: { inProgress },
    });

    return { type: null, message: matchesInProgress };
  };

  serviceMatchesPost = async (createMatche: IMatche) => {
    const { homeTeam, awayTeam, homeTeamGoals, awayTeamGoals, inProgress } = createMatche;

    const newMatche = await Matche.create({
      homeTeam, awayTeam, homeTeamGoals, awayTeamGoals, inProgress,
    });

    return { type: null, message: newMatche };
  };
}

export default MatchesService;
