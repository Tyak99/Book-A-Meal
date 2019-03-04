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
  role: 1,
};

describe('Set roles', () => {
  it('should set admin role', (done) => {
    chai
      .request(server)
      .post('/api/v1/role')
      .send({ name: 'Admin' })
      .end((err, res) => {
        expect(res.body.status).to.eql(201);
        done();
      });
  });
});

describe('Set roles', () => {
  it('should set user role', (done) => {
    chai
      .request(server)
      .post('/api/v1/role')
      .send({ name: 'Customer' })
      .end((err, res) => {
        expect(res.body.status).to.eql(201);
        done();
      });
  });
});


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
