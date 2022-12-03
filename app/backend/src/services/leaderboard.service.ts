import ValidateRules from './validations/validateRule';
import ValiAway from './validations/valiAway';
import { ILBoard } from '../interfaces/interface';

class LeaderBoardService {
  constructor(public validateRules = new ValidateRules(), public valiAway = new ValiAway()) { }
  serviceLeaderboardHomeGet = async () => {
    const informationTeam = await this.validateRules.allTeamsAndMatches();
    informationTeam.sort((b: ILBoard, a: ILBoard) => {
      let desempate = a.totalPoints - b.totalPoints;
      if (desempate === 0) {
        desempate = a.totalVictories - b.totalVictories;
        if (desempate === 0) {
          desempate = a.goalsBalance - b.goalsBalance;
          if (desempate === 0) {
            desempate = a.goalsFavor - b.goalsFavor;
            if (desempate === 0) {
              desempate = a.goalsOwn - b.goalsOwn;
            }
          }
        }
      }
      return desempate;
    });
    return { type: null, message: informationTeam };
  };

  serviceLeaderBoardAwayGet = async () => {
    const informationTeam2 = await this.valiAway.allMatchesTeams2();
    informationTeam2.sort((b: ILBoard, a: ILBoard) => {
      let desempate2 = a.totalPoints - b.totalPoints;
      if (desempate2 === 0) {
        desempate2 = a.totalVictories - b.totalVictories;
        if (desempate2 === 0) {
          desempate2 = a.goalsBalance - b.goalsBalance;
          if (desempate2 === 0) {
            desempate2 = a.goalsFavor - b.goalsOwn;
            if (desempate2 === 0) {
              desempate2 = a.goalsOwn - b.goalsOwn;
            }
          }
        }
      }
      return desempate2;
    });
    return { type: null, message: informationTeam2 };
  };
}

export default LeaderBoardService;
