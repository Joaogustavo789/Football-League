import ValidateRules from './validations/validateRule';
import ValiAway from './validations/valiAway';
import { ILBoard } from '../interfaces/interface';
import ValiAll from './validations/valiAll';

class LeaderBoardService {
  constructor(
    public validateRules = new ValidateRules(),
    public valiAway = new ValiAway(),
    public valiAll = new ValiAll(),
  ) { }

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
            desempate2 = a.goalsFavor - b.goalsFavor;
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

  serviceLeaderBoardGet = async () => {
    const informationTeam3 = await this.valiAll.allMatchesTeams3();
    informationTeam3.sort((b: ILBoard, a: ILBoard) => {
      let desempate3 = a.totalPoints - b.totalPoints;
      if (desempate3 === 0) {
        desempate3 = a.totalVictories - b.totalVictories;
        if (desempate3 === 0) {
          desempate3 = a.goalsBalance - b.goalsBalance;
          if (desempate3 === 0) {
            desempate3 = a.goalsFavor - b.goalsFavor;
            if (desempate3 === 0) {
              desempate3 = a.goalsOwn - b.goalsOwn;
            }
          }
        }
      }
      return desempate3;
    });
    return { type: null, message: informationTeam3 };
  };
}

export default LeaderBoardService;
