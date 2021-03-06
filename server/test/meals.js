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
      .post('/api/v1/meal')
      .send({})
      .set('Authorization', token)
      .end((err, res) => {
        expect(res.body.status).to.eql(400);
        expect(res.body).to.have.property('error');
        done();
      });
  });
  it('should post a meal successfully', (done) => {
    chai
      .request(server)
      .post('/api/v1/meal/')
      .send({ name: 'Beans', price: '1200', caterer: 1 })
      .set('Authorization', token)
      .end((err, res) => {
        expect(res.body.status).to.eql(201);
        expect(res.body.data).to.be.an('object');
        expect(res.body.data).to.have.property('id');
        expect(res.body.data).to.have.property('name');
        expect(res.body.data).to.have.property('price');
        done();
      });
  });
});

describe('Meal tests', () => {
  describe('GET api/v1/meals', () => {
    it('Get all meals', (done) => {
      chai
        .request(server)
        .get('/api/v1/meal/caterer/1')
        .set('Authorization', token)
        .end((err, res) => {
          expect(res.body.status).to.eql(200);
          expect(res.body.data).to.be.an('array');
          done();
        });
    });
    it('should return 404 error on wrong api call', (done) => {
      chai
        .request(server)
        .get('/api/v1/wrongapi')
        .end((err, res) => {
          expect(res.status).to.eql(404);
          done();
        });
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
      .put('/api/v1/meal/65')
      .set('Authorization', token)
      .end((err, res) => {
        expect(res.body.status).to.eql(400);
        expect(res.body).to.have.property('error');
        done();
      });
  });
  it('should update the meal when correct id is passed along', (done) => {
    chai
      .request(server)
      .put('/api/v1/meal/1')
      .send({ price: '900' })
      .set('Authorization', token)
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

describe('DELETE /api/v1/meal', () => {
  it('should return error 404 on wrong api call', (done) => {
    chai
      .request(server)
      .delete('/api/v1/wrongapi')
      .end((err, res) => {
        expect(res.status).to.eql(404);
        done();
      });
  });
  it('should return error when incorrect id is passed', (done) => {
    chai
      .request(server)
      .delete('/api/v1/meal/65')
      .set('Authorization', token)
      .end((err, res) => {
        expect(res.body.status).to.eql(400);
        expect(res.body).to.have.property('error');
        done();
      });
  });
  it('should delete the data when the right id is passed', (done) => {
    chai
      .request(server)
      .delete('/api/v1/meal/1')
      .set('Authorization', token)
      .end((err, res) => {
        expect(res.body.status).to.eql(204);
        expect(res.body)
          .to.have.property('data')
          .eql('Meal deleted successfully');
        done();
      });
  });
});
