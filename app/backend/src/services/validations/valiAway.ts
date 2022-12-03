import Matche from '../../database/models/Matche.model';
import Team from '../../database/models/Team.model';
import { ILBoard, IMatche } from '../../interfaces/interface';

class ValiAway {
  saveArray2: ILBoard[];

  constructor() {
    this.saveArray2 = [];
  }

  validtateVictories = (matches: IMatche[]) => {
    let victories = 0;
    let draws = 0;
    let losses = 0;
    let favorGoals = 0;
    let ownGoals = 0;
    matches.forEach((games) => {
      favorGoals += games.awayTeamGoals;
      ownGoals += games.homeTeamGoals;
      if (games.awayTeamGoals > games.homeTeamGoals) victories += 1;
      if (games.awayTeamGoals === games.homeTeamGoals) draws += 1;
      if (games.awayTeamGoals < games.homeTeamGoals) losses += 1;
    });
    return { victories, draws, losses, favorGoals, ownGoals };
  };

  mAll2 = () => Matche.findAll({
    where: { inProgress: false },
    raw: true,
    include: [
      { model: Team, as: 'teamAway', attributes: { exclude: ['id'] } },
    ],
  });

  allMatchesTeams2 = async () => {
    const allT2 = await Team.findAll(); const allM2 = await this.mAll2(); let arrT2: ILBoard[] = [];
    allT2.forEach((club) => {
      const allMatchesTeams2 = allM2.filter((matcheTeam2) => matcheTeam2.awayTeam === club.id);
      const victoriesValidate = this.validtateVictories(allMatchesTeams2);
      const object2 = { name: club.teamName,
        totalPoints: (victoriesValidate.victories * 3) + (victoriesValidate.draws * 1),
        totalGames: allMatchesTeams2.length,
        totalVictories: victoriesValidate.victories,
        totalDraws: victoriesValidate.draws,
        totalLosses: victoriesValidate.losses,
        goalsFavor: victoriesValidate.favorGoals,
        goalsOwn: victoriesValidate.ownGoals,
        goalsBalance: victoriesValidate.favorGoals - victoriesValidate.ownGoals,
        efficiency: ((((victoriesValidate.victories * 3) + (victoriesValidate.draws * 1))
        / (allMatchesTeams2.length * 3)) * 100).toFixed(2),
      }; this.saveArray2.push(object2); arrT2 = this.saveArray2;
    }); this.saveArray2 = [];
    return arrT2;
  };
}

export default ValiAway;
