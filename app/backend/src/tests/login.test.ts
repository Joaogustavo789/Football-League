import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import App from '../app';

const { app } = new App();

const { expect } = chai;

chai.use(chaiHttp);

describe('Testes do Login.', () => {
  it('Testa se faz o login com sucesso.', async () => {
    const response = await chai.request(app).post('/login').send(
      {
        email: 'admin@admin.com',
        password: 'secret_admin'
      },
    );

    expect(response.status).to.be.equal(200);
  })
})