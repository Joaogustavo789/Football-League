import ValidateRules from './validations/validateRule';
import { ILeaderBoard } from '../interfaces/interface';

class LeaderBoardService {
  constructor(public validateRules = new ValidateRules()) { }
  serviceLeaderboardGet = async () => {
    const informationTeam = await this.validateRules.allTeamsAndMatches();
    informationTeam.sort((b: ILeaderBoard, a: ILeaderBoard) => {
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
}

export default LeaderBoardService;
