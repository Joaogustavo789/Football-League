import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import App from '../app';

const { app } = new App();

const { expect } = chai;

chai.use(chaiHttp);

describe('Testes do leaderboard.', () => {
  it('Testa se lista os dados dos times quando jogaram em casa com sucesso.', async () => {
    const response = await chai.request(app).get('/leaderboard/home').send();

    expect(response.status).to.be.equal(200);
  })

  it('Testa se lista os dados dos times quando jogaram fora de casa com sucesso.', async () => {
    const response = await chai.request(app).get('/leaderboard/away').send();

    expect(response.status).to.be.equal(200);
  })

  it('Testa se lista os dados dos times quando jogaram em casa e fora com sucesso.', async () => {
    const response = await chai.request(app).get('/leaderboard').send();

    expect(response.status).to.be.equal(200);
  })
})