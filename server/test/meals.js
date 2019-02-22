/* eslint-disable import/no-extraneous-dependencies */
import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../app';

const { expect } = chai;
chai.use(chaiHttp);

describe('Meal tests', () => {
  describe('GET api/v1/meals', () => {
    it('Get all meals', (done) => {
      chai
        .request(server)
        .get('/api/v1/meals')
        .end((err, res) => {
          expect(res.body.status).to.eql(200);
          expect(res.body.data).to.be.an('array');
          done();
        });
    });
    it('should return 404 error on wrong api call', (done) => {
      chai
        .request(server)
        .get('api/v1/wrongapi')
        .end((err, res) => {
          expect(res.status).to.eql(404);
          done();
        });
    });
  });
  describe('GET api/v1/meals/:id', () => {
    it('should return error if wrong id is passed', (done) => {
      chai
        .request(server)
        .get('/api/v1/meals/wrongid')
        .end((err, res) => {
          expect(res.body.status).to.equal(400);
          expect(res.body.data).to.have.property('message');
          done();
        });
    });
    it('should return 404 error for wrong api call', (done) => {
      chai
        .request(server)
        .get('api/v1/wrongapi')
        .end((err, res) => {
          expect(res.status).to.eql(404);
          done();
        });
    });
    it('should return a meal when a correct id is passed', (done) => {
      chai
        .request(server)
        .get('/api/v1/meals/1')
        .end((err, res) => {
          expect(res.body.status).to.eql(200);
          expect(res.body.data).to.be.an('object');
          expect(res.body.data).to.have.property('name');
          expect(res.body.data).to.have.property('size');
          expect(res.body.data).to.have.property('price');
          done();
        });
    });
    it('should return the meal that matches the provided id', (done) => {
      const getId = 1;
      chai
        .request(server)
        .get(`/api/v1/meals/${getId}`)
        .end((err, res) => {
          expect(res.body.data)
            .to.have.property('id')
            .to.eql(getId);
          done();
        });
    });
  });
});
