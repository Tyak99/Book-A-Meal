/* eslint-disable import/no-extraneous-dependencies */
import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../app';

const { expect } = chai;
chai.use(chaiHttp);

const user = {
  firstName: 'Bisi',
  lastName: 'Bisiano',
  email: 'bisi@mail.com',
  password: 'lollipoppo',
  roleId: 1,
};

describe('Test login endpoint', () => {
  it('register for an account', (done) => {
    chai
      .request(server)
      .post('/api/v1/auth/signup')
      .send(user)
      .end((err, res) => {
        expect(res.body).to.have.property('token');
        done();
      });
  });
});

describe('Test login', () => {
  it('should login in a user', (done) => {
    chai
      .request(server)
      .post('/api/v1/auth/login')
      .send({
        email: user.email,
        password: user.password,
      })
      .end((err, res) => {
        expect(res.body).to.have.property('token');
        expect(res.body).to.have.property('name');
        done();
      });
  });
});
