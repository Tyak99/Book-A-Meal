/* eslint-disable import/no-extraneous-dependencies */
import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../app';

const { expect } = chai;
chai.use(chaiHttp);

describe('Test login endpoint', () => {
  it('register for an account', (done) => {
    chai
      .request(server)
      .post('/api/v1/auth/signup')
      .send({
        firstName: 'Bisi',
        lastName: 'Bisiano',
        email: 'bisi@mail.com',
        password: 'lollipoppo',
        roleId: 1,
      })
      .end((err, res) => {
        expect(res.body).to.have.property('token');
        done();
      });
  });
});
