/* eslint-disable import/no-extraneous-dependencies */
import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../app';

const { expect } = chai;
chai.use(chaiHttp);

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
        .end((err, res) => {
          expect(res.body.status).to.eql(200);
          expect(res.body.data).to.be.an('array');
          done();
        });
    });
  });
  describe('GET /api/v1/menu/id', () => {
    it('should return error 404 on wrong api call', (done) => {
      chai
        .request(server)
        .get('/api/v1/wrongapi')
        .end((err, res) => {
          expect(res.status).to.eql(404);
          done();
        });
    });
    it('should return error when wrong menu is passed', (done) => {
      chai
        .request(server)
        .get('/api/v1/menu/wrongid')
        .end((err, res) => {
          expect(res.body.status).to.eql(400);
          expect(res.body.data).to.have.property('message');
          done();
        });
    });
    it('should return the menu when correct id is passed', (done) => {
      chai
        .request(server)
        .get('/api/v1/menu/1')
        .end((err, res) => {
          expect(res.body.status).to.eql(200);
          expect(res.body.data).to.to.an('object');
          expect(res.body.data).to.have.property('id');
          expect(res.body.data).to.have.property('name');
          expect(res.body.data).to.have.property('meals');
          expect(res.body.data.meals).to.be.an('array');
          done();
        });
    });
  });
});
