import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import App from '../app';

const { app } = new App();

const { expect } = chai;

chai.use(chaiHttp);

describe('Testes do teams.', () => {
  it('Testa se lista os times com sucesso.', async () => {
    const response = await chai.request(app).get('/teams').send();

    expect(response.status).to.be.equal(200);
  })

  it('Testa se lista um único time com sucesso.', async () => {
    const response = await chai.request(app).get('/teams/1').send();

    expect(response.status).to.be.equal(200);
  })
})