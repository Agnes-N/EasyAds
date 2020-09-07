import supertest from 'supertest';
import { config } from 'dotenv';
import app from '../index';

config();
const request = supertest(app);

describe('Auth Endpoints', () => {
  const userData = [{
    firstname: 'elle',
    lastname: 'kana',
    email: 'elle@gmail.com',
    password: '12345678',
    address: 'kicukiro',
    phoneNumber: '0781152267',
  }, {
    firstname: 'cl',
    lastname: 'kalisa',
    email: 'claude@gmailom',
    password: '12345678',
    address: 'Gasabo',
    phoneNumber: '0781152234'
  }, {
    firstname: 'alain',
    lastname: 'aime',
    email: 'allan@example.com',
    password: '12345678',
    address: 'Nyamabuye',
    phoneNumber: '0781158790',
  }, {
    firstname: 'karera',
    lastname: 'peter',
    email: 'karera@gmail.com',
    password: '12349878',
    address: 'Ririmba',
  }];
  it('should signup a user', async () => {
    const res = await request.post('/api/v1/auth/signup')
      .send(userData[0]);
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('status');
  });

  it('should return an error when data sent are not valid ', async () => {
    const res = await request.post('/api/v1/auth/signup')
      .send(userData[1]);
    expect(res.statusCode).toEqual(422);
    expect(res.body).toHaveProperty('message');
  });

  it('should return an error when email sent is already in use ', async () => {
    const res = await request.post('/api/v1/auth/signup')
      .send(userData[2]);
    expect(res.statusCode).toEqual(409);
    expect(res.body).toHaveProperty('message');
  });
  it('should return an error if the data sent are not full', async () => {
    const res = await request.post('/api/v1/auth/signup')
      .send(userData[3]);
    expect(res.statusCode).toEqual(422);
    expect(res.body).toHaveProperty('message');
  });
});
