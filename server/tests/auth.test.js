import supertest from 'supertest';
import { config } from 'dotenv';
import app from '../index';

config();
const request = supertest(app);

describe('Auth Endpoints', () => {
  it('should signup a user', async () => {
    const res = await request.post('/api/v1/auth/signup')
      .send({
        firstname: 'elle',
        lastname: 'kana',
        email: 'elle@gmail.com',
        password: '12345678',
        address: 'kicukiro',
        phoneNumber: '0781152267',
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('status');
  });
});
