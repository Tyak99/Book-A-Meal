/* eslint-disable import/no-extraneous-dependencies */
import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../app';

const { expect } = chai;
chai.use(chaiHttp);

const user = {
  email: 'bisi@mail.com',
  password: 'lollipoppo',
};

let token = '';

describe('Test login', () => {
  it('should login in a user', (done) => {
    chai
      .request(server)
      .post('/api/v1/auth/login')
      .send(user)
      .end((err, res) => {
        token = res.body.token;
        expect(res.body).to.have.property('token');
        done();
      });
  });
});


describe('POST api/v1/menu', () => {
  it('should return error on wrong api call', (done) => {
    chai
      .request(server)
      .post('/api/v1/wrongapi')
      .send()
      .end((err, res) => {
        expect(res.status).to.eql(404);
        done();
      });
  });
  it('should return error when no data is sent with the request', (done) => {
    chai
      .request(server)
      .post('/api/v1/menu')
      .send({})
      .set('Authorization', token)
      .end((err, res) => {
        expect(res.body.status).to.eql(400);
        expect(res.body).to.have.property('error');
        done();
      });
  });
  it('should return error when all the required data isnt sent along the request', (done) => {
    chai
      .request(server)
      .post('/api/v1/menu')
      .send({ name: 'Breakfast Classic' })
      .set('Authorization', token)
      .end((err, res) => {
        expect(res.body.status).to.eql(400);
        expect(res.body).to.have.property('error');
        done();
      });
  });
  it('should post the data succesfully when the details are sent correctly', (done) => {
    chai
      .request(server)
      .post('/api/v1/menu')
      .send({
        name: 'Breakfast Classic',
        price: '1200',
        meals: ['rice', 'beans'],
      })
      .set('Authorization', token)
      .end((err, res) => {
        expect(res.body.status).to.eql(201);
        expect(res.body.data).to.be.an('object');
        expect(res.body.data).to.have.property('id');
        expect(res.body.data).to.have.property('name');
        expect(res.body.data).to.have.property('meals');
        done();
      });
  });
});

describe('Menu tests', () => {
  describe('GET api/v1/menu', () => {
    it('should return error 404 on wrong api call', (done) => {
      chai
        .request(server)
        .get('/api/v1/wrongapi')
        .end((err, res) => {
          expect(res.status).to.eql(404);
          done();
        });
    });
    it('Get all menu', (done) => {
      chai
        .request(server)
        .get('/api/v1/menu')
        .set('Authorization', token)
        .end((err, res) => {
          expect(res.body.status).to.eql(200);
          expect(res.body.data).to.be.an('array');
          done();
        });
    });
  });
});
