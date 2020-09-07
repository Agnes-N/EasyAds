import supertest from 'supertest';
import app from '../index';

const request = supertest(app);

describe('Sign in Endpoints', () => {
  const userData = [{
    email: 'aggyreina@gmail.com',
    password: '12345678'
  }, {
    email: 'claude@gmailom',
    password: '1nn',
  }, {
    email: 'labelle@example.com',
    password: '1234567',
  }, {
    email: '',
    password: '12349878'
  }, {
    email: 'allan@example',
    password: ''
  }];
  it('should allow user to sign in', async () => {
    const res = await request.post('/api/v1/auth/signin')
      .send(userData[0]);
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('status');
  });

  it('should not allow user to sign in when password is not valid', async () => {
    const res = await request.post('/api/v1/auth/signin')
      .send(userData[1]);
    expect(res.statusCode).toEqual(422);
    expect(res.body).toHaveProperty('message');
  });

  it('should not allow user to sign in they are not registered', async () => {
    const res = await request.post('/api/v1/auth/signin')
      .send(userData[2]);
    expect(res.statusCode).toEqual(404);
    expect(res.body).toHaveProperty('error');
  });

  it('should not allow user to sign in they do not provide email', async () => {
    const res = await request.post('/api/v1/auth/signin')
      .send(userData[3]);
    expect(res.statusCode).toEqual(422);
    expect(res.body).toHaveProperty('message');
  });

  it('should not allow user to sign in they do not provide password', async () => {
    const res = await request.post('/api/v1/auth/signin')
      .send(userData[4]);
    expect(res.statusCode).toEqual(422);
    expect(res.body).toHaveProperty('message');
  });
});
