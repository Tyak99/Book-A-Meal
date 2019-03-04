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
describe('ORDERS /api/v1/orders', () => {
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
        .post('/api/v1/order')
        .set('Authorization', token)
        .send({})
        .end((err, res) => {
          expect(res.body.status).to.eql(400);
          expect(res.body).to.have.property('error');
          done();
        });
    });
    it('should return error when all data isnt sent along', (done) => {
      chai
        .request(server)
        .post('/api/v1/order')
        .send({ price: '1200' })
        .set('Authorization', token)
        .end((err, res) => {
          expect(res.body.status).to.eql(400);
          expect(res.body).to.have.property('error');
          done();
        });
    });
    it('should post the post the orders when correct data is passed along', (done) => {
      chai
        .request(server)
        .post('/api/v1/order')
        .send({
          price: '1200',
          order_status: 'sent',
          catererId: '1',
          delivery_address: 'Mafoluku',
          meals: ['rice', 'beans'],
        })
        .set('Authorization', token)
        .end((err, res) => {
          expect(res.body.status).to.eql(201);
          expect(res.body.data).to.be.an('object');
          expect(res.body.data).to.have.property('id');
          expect(res.body.data).to.have.property('meals');
          expect(res.body.data).to.have.property('price');
          expect(res.body.data).to.have.property('order_status');
          done();
        });
    });
  });
});

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
      .get('/api/v1/order/caterer/1')
      .set('Authorization', token)
      .end((err, res) => {
        expect(res.body.status).to.eql(200);
        expect(res.body.data).to.be.an('array');
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
      .put('/api/v1/order/678')
      .set('Authorization', token)
      .end((err, res) => {
        expect(res.body.status).to.eql(400);
        expect(res.body).to.have.property('error');
        done();
      });
  });
  it('should edit the correct order', (done) => {
    chai
      .request(server)
      .put('/api/v1/order/1')
      .send({ order_status: 'delivered' })
      .set('Authorization', token)
      .end((err, res) => {
        expect(res.body.status).to.eql(204);
        expect(res.body.data).to.be.an('object');
        expect(res.body.data).to.have.property('id');
        expect(res.body.data).to.have.property('meals');
        expect(res.body.data).to.have.property('order_status');
        done();
      });
  });
});
