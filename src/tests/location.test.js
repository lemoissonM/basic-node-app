/* eslint-disable no-undef */
const supertest = require('supertest');
const app = require('../server');

const request = supertest(app);

describe('POST /api/location', () => {
  it('Should save location successfully', (done) => {
    request.post('/api/location')
      .send({ lat: '-23.5489', lng: '-46.6388', id: '1' })
      .end((err, res) => {
        expect(res.status).toBe(201);
        expect(res.body.message).toBe('Location saved');
        done();
      });
  });

  it('Should return 400 error', (done) => {
    request.post('/api/location')
      .send({ lat: '-23.5489', id: '1' })
      .end((err, res) => {
        expect(res.status).toBe(400);
        done();
      });
  });
});
