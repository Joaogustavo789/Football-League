import Team from '../database/models/Team.model';
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

    const teamHome = await Team.findByPk(homeTeam);

    const teamAway = await Team.findByPk(awayTeam);

    if (!teamHome || !teamAway) {
      return { type: 'NOT_FOUND', message: 'There is no team with such id!' };
    }

    if (homeTeam === awayTeam) {
      return {
        type: 'INVALID_VALUE',
        message: 'It is not possible to create a match with two equal teams' };
    }

    const newMatche = await Matche.create({
      homeTeam, awayTeam, homeTeamGoals, awayTeamGoals, inProgress,
    });

    return { type: null, message: newMatche };
  };

  serviceMatchesPatch = async (inProgress: boolean, id: number) => {
    await Matche.update(
      { inProgress },
      { where: { id } },
    );

    return { type: null, message: 'Finished' };
  };
}

export default MatchesService;
