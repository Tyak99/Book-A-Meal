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
});
