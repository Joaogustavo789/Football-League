import Matche from '../../database/models/Matche.model';
import Team from '../../database/models/Team.model';
import { ILBoard, IMatche } from '../../interfaces/interface';

class ValidateRules {
  saveArray: ILBoard[];
  constructor() {
    this.saveArray = [];
  }

  verifyVictories = (game: IMatche[]) => {
    let victories = 0;
    let draw = 0;
    let losses = 0;
    let favorGoals = 0;
    let ownGoals = 0;
    game.forEach((matche) => {
      favorGoals += matche.homeTeamGoals;
      ownGoals += matche.awayTeamGoals;
      if (matche.homeTeamGoals > matche.awayTeamGoals) victories += 1;
      if (matche.homeTeamGoals === matche.awayTeamGoals) draw += 1;
      if (matche.homeTeamGoals < matche.awayTeamGoals) losses += 1;
    });
    return { victories, draw, losses, favorGoals, ownGoals };
  };

  mAll = () => Matche.findAll({
    where: { inProgress: false },
    raw: true,
    include: [
      { model: Team, as: 'teamHome', attributes: { exclude: ['id'] } },
    ],
  });

  allTeamsAndMatches = async () => {
    const allT = await Team.findAll(); const allM = await this.mAll(); let arrT: ILBoard[] = [];
    allT.forEach((team) => {
      const allMatchesTeam = allM.filter((matcheTeam) => matcheTeam.homeTeam === team.id);
      const victoriesVerify = this.verifyVictories(allMatchesTeam);
      const object = { name: team.teamName,
        totalPoints: (victoriesVerify.victories * 3) + (victoriesVerify.draw * 1),
        totalGames: allMatchesTeam.length,
        totalVictories: victoriesVerify.victories,
        totalDraws: victoriesVerify.draw,
        totalLosses: victoriesVerify.losses,
        goalsFavor: victoriesVerify.favorGoals,
        goalsOwn: victoriesVerify.ownGoals,
        goalsBalance: victoriesVerify.favorGoals - victoriesVerify.ownGoals,
        efficiency: ((((victoriesVerify.victories * 3) + (victoriesVerify.draw * 1))
        / (allMatchesTeam.length * 3)) * 100).toFixed(2),
      }; this.saveArray.push(object); arrT = this.saveArray;
    }); this.saveArray = [];
    return arrT;
  };
}

export default ValidateRules;
