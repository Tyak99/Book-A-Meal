/* eslint-disable import/no-extraneous-dependencies */
import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../app';

const { expect } = chai;
chai.use(chaiHttp);

describe('ORDERS /api/v1/orders', () => {
  describe('GET /api/v1/orders', () => {
    it('should return error on wrong api call', (done) => {
      chai
        .request(server)
        .get('/api/v1/wrongapi')
        .end((err, res) => {
          expect(res.status).to.eql(404);
          done();
        });
    });
    it('GET all orders', (done) => {
      chai
        .request(server)
        .get('/api/v1/orders')
        .end((err, res) => {
          expect(res.body.status).to.eql(200);
          expect(res.body.data).to.be.an('array');
          done();
        });
    });
  });
  describe('POST /api/v1/orders', () => {
    it('should return error on wrong api call', (done) => {
      chai
        .request(server)
        .post('/api/v1/wrongapi')
        .end((err, res) => {
          expect(res.status).to.eql(404);
          done();
        });
    });
    it('should return error when no data is present in request', (done) => {
      chai
        .request(server)
        .post('/api/v1/orders')
        .send({})
        .end((err, res) => {
          expect(res.body.status).to.eql(400);
          expect(res.body.data).to.have.property('message');
          done();
        });
    });
    it('should return error when all data isnt sent along', (done) => {
      chai
        .request(server)
        .post('/api/v1/orders')
        .send({ price: '1200' })
        .end((err, res) => {
          expect(res.body.status).to.eql(400);
          expect(res.body.data).to.have.property('message');
          done();
        });
    });
    it('should post the post the orders when correct data is passed along', (done) => {
      chai
        .request(server)
        .post('/api/v1/orders')
        .send({
          meals: ['rice', 'beans'],
          price: '1200',
          customer: '2',
          status: 'sent',
          delivery_address: 'Mafoluku',
        })
        .end((err, res) => {
          expect(res.body.status).to.eql(201);
          expect(res.body.data).to.be.an('object');
          expect(res.body.data).to.have.property('id');
          expect(res.body.data).to.have.property('meals');
          expect(res.body.data).to.have.property('price');
          expect(res.body.data).to.have.property('customer');
          expect(res.body.data).to.have.property('status');
          done();
        });
    });
  });
  describe('EDIT /api/v1/orders', () => {
    it('should return error 404 on wrong api call', (done) => {
      chai
        .request(server)
        .put('/api/v1/wrongapi')
        .end((err, res) => {
          expect(res.status).to.eql(404);
          done();
        });
    });
    it('should return error when a wrong id is passed with request', (done) => {
      chai
        .request(server)
        .put('/api/v1/orders/wrongid')
        .end((err, res) => {
          expect(res.body.status).to.eql(400);
          expect(res.body.data).to.have.property('message');
          done();
        });
    });
    it('should edit the correct order', (done) => {
      chai
        .request(server)
        .put('/api/v1/orders/1')
        .send({ status: 'delivered' })
        .end((err, res) => {
          expect(res.body.status).to.eql(200);
          expect(res.body.data).to.be.an('object');
          expect(res.body.data).to.have.property('id');
          expect(res.body.data).to.have.property('meals');
          expect(res.body.data).to.have.property('status');
          done();
        });
    });
  });
});
