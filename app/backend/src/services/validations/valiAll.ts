import Matche from '../../database/models/Matche.model';
import Team from '../../database/models/Team.model';
import { ILBoard, IMatche } from '../../interfaces/interface';

class ValiAll {
  saveArray3: ILBoard[];

  constructor() {
    this.saveArray3 = [];
  }

  valiHome = (matche: IMatche[]) => {
    let victories = 0; let draws = 0; let losses = 0; let favorGoals = 0; let ownGoals = 0;
    matche.forEach((games) => {
      favorGoals += games.homeTeamGoals; ownGoals += games.awayTeamGoals;
      if (games.homeTeamGoals > games.awayTeamGoals) victories += 1;
      if (games.homeTeamGoals === games.awayTeamGoals) draws += 1;
      if (games.homeTeamGoals < games.awayTeamGoals) losses += 1;
    });
    return { victories, draws, losses, favorGoals, ownGoals };
  };

  valiAway = (matche: IMatche[]) => {
    let victories = 0; let draws = 0; let losses = 0; let favorGoals = 0; let ownGoals = 0;
    matche.forEach((games) => {
      favorGoals += games.awayTeamGoals; ownGoals += games.homeTeamGoals;
      if (games.awayTeamGoals > games.homeTeamGoals) victories += 1;
      if (games.awayTeamGoals === games.homeTeamGoals) draws += 1;
      if (games.awayTeamGoals < games.homeTeamGoals) losses += 1;
    });
    return { victories, draws, losses, favorGoals, ownGoals };
  };

  valiVictories = (matche: IMatche[], id: number) => {
    const allHome = matche.filter((game) => game.homeTeam === id);
    const allAway = matche.filter((game) => game.awayTeam === id);
    const homeVali = this.valiHome(allHome);
    const awayVali = this.valiAway(allAway);

    return {
      victories: homeVali.victories + awayVali.victories,
      draws: homeVali.draws + awayVali.draws,
      losses: homeVali.losses + awayVali.losses,
      favorGoals: homeVali.favorGoals + awayVali.favorGoals,
      ownGoals: homeVali.ownGoals + awayVali.ownGoals,
    };
  };

  mAll3 = () => Matche.findAll({
    where: { inProgress: false },
    raw: true,
    include: [
      { model: Team, as: 'teamHome', attributes: { exclude: ['id'] } },
      { model: Team, as: 'teamAway', attributes: { exclude: ['id'] } },
    ],
  });

  allMatchesTeams3 = async () => {
    const allT3 = await Team.findAll(); const allM3 = await this.mAll3(); let arrT3: ILBoard[] = [];
    allT3.forEach((club) => {
      const mT3 = allM3.filter((gameT) => gameT.homeTeam === club.id || gameT.awayTeam === club.id);
      const victoriesVali = this.valiVictories(mT3, club.id);
      const object3 = { name: club.teamName,
        totalPoints: (victoriesVali.victories * 3) + (victoriesVali.draws * 1),
        totalGames: mT3.length,
        totalVictories: victoriesVali.victories,
        totalDraws: victoriesVali.draws,
        totalLosses: victoriesVali.losses,
        goalsFavor: victoriesVali.favorGoals,
        goalsOwn: victoriesVali.ownGoals,
        goalsBalance: victoriesVali.favorGoals - victoriesVali.ownGoals,
        efficiency: ((((victoriesVali.victories * 3) + (victoriesVali.draws * 1))
        / (mT3.length * 3)) * 100).toFixed(2),
      }; this.saveArray3.push(object3); arrT3 = this.saveArray3;
    }); this.saveArray3 = [];
    return arrT3;
  };
}

export default ValiAll;
