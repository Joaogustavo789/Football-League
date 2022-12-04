import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import App from '../app';

const { app } = new App();

const { expect } = chai;

chai.use(chaiHttp);

describe('Testes de matches.', () => {
  it('Testa se lista todos as partidas com sucesso.', async () => {
    const response = await chai.request(app).get('/matches').send()

    expect(response.status).to.be.equal(200);
  })

  it('Testa se cria uma partida com sucesso.', async () => {
    const response = await chai.request(app).post('/matches').send(
      {
        homeTeam: 16,
        awayTeam: 15,
        homeTeamGoals: 2,
        awayTeamGoals: 2
      }
    )

    expect(response.status).to.be.equal(201);
  })

  it('Testa se atualiza o status da partida com sucesso.', async () => {
    const response = await chai.request(app).patch('/:id/finish').send()

    expect(response.status).to.be.equal(200);
  })
})