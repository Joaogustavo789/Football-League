import Matche from '../database/models/Matche.model';

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
}

export default MatchesService;
