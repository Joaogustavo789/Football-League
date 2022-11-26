import { Model, INTEGER, BOOLEAN } from 'sequelize';
import db from '.';
import Team from './Team.model';

class Matche extends Model {
  declare id: number;
  declare homeTeam: number;
  declare homeTeamGoals: number;
  declare awayTeam: number;
  declare awayTeamGoals: number;
  declare inProgress: boolean;
}

Matche.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: INTEGER,
  },
  homeTeam: {
    allowNull: false,
    type: INTEGER,
  },
  homeTeamGoals: {
    allowNull: false,
    type: INTEGER,
  },
  awayTeam: {
    allowNull: false,
    type: INTEGER,
  },
  awayTeamGoals: {
    allowNull: false,
    type: INTEGER,
  },
  inProgress: {
    allowNull: false,
    type: BOOLEAN,
  },
}, {
  sequelize: db,
  modelName: 'matches',
  timestamps: false,
  underscored: true,
});

Team.hasMany(Matche, {
  foreignKey: 'home_team',
  as: 'teamHome',
});

Team.hasMany(Matche, {
  foreignKey: 'away_team',
  as: 'teamAway',
});

Matche.belongsTo(Team, {
  foreignKey: 'home_team',
  as: 'teamHome',
});

Matche.belongsTo(Team, {
  foreignKey: 'away_team',
  as: 'teamAway',
});

export default Matche;
