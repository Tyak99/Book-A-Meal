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
  describe('POST api/v1/meals', () => {
    it('should return 404 error on wrong api call', (done) => {
      chai
        .request(server)
        .post('/api/v1/wrongapi')
        .end((err, res) => {
          expect(res.status).to.eql(404);
          done();
        });
    });
    it('should return error if the required fields arent present', (done) => {
      chai
        .request(server)
        .post('/api/v1/meals/')
        .send({})
        .end((err, res) => {
          expect(res.body.status).to.eql(400);
          expect(res.body.data).to.have.property('message');
          done();
        });
    });
    it('should post a meal successfully', (done) => {
      chai
        .request(server)
        .post('/api/v1/meals/')
        .send({ name: 'Beans', size: '2', price: '1200' })
        .end((err, res) => {
          expect(res.body.status).to.eql(201);
          expect(res.body.data).to.be.an('object');
          expect(res.body.data).to.have.property('id');
          expect(res.body.data).to.have.property('name');
          expect(res.body.data).to.have.property('size');
          expect(res.body.data).to.have.property('price');
          expect(res.body.data).to.have.property('currency');
          done();
        });
    });
  });
  describe('PUT /api/v1/meals', () => {
    it('should return 404 error on wrong api call', (done) => {
      chai
        .request(server)
        .put('/api/v1/wrongapi')
        .end((err, res) => {
          expect(res.status).to.eql(404);
          done();
        });
    });
    it('should return error 400 if wrong id is passed', (done) => {
      chai
        .request(server)
        .put('/api/v1/meals/wrongid')
        .end((err, res) => {
          expect(res.body.status).to.eql(400);
          expect(res.body.data).to.have.property('message');
          done();
        });
    });
    it('should update the meal when correct id is passed along', (done) => {
      chai
        .request(server)
        .put('/api/v1/meals/1')
        .send({ price: '1000' })
        .end((err, res) => {
          expect(res.body.status).to.eql(200);
          expect(res.body.data).to.be.an('object');
          expect(res.body.data).to.have.property('id');
          expect(res.body.data).to.have.property('name');
          expect(res.body.data).to.have.property('price');
          done();
        });
    });
  });
});
