import supertest from 'supertest';
import { config } from 'dotenv';
import app from '../index';
import userData from './mockData/user';

config();
const request = supertest(app);

describe('Sign up Endpoints', () => {
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
