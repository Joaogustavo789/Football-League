import { Router } from 'express';
import loginRouter from './login.routes';
import teamsRouter from './teams.routes';
import matcheRouter from './matches.routes';
import leaderboardRouter from './leaderboard.routes';

const routers = Router();

routers.use('/login', loginRouter);

routers.use('/teams', teamsRouter);

routers.use('/matches', matcheRouter);

routers.use('/leaderboard', leaderboardRouter);

export default routers;
