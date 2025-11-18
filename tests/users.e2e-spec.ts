import { App } from '../src/app';
import { boot } from '../src/main';
import request from 'supertest';

let application: App;

beforeAll(async () => {
	const { app } = await boot;
	application = app;
});

describe('Users e2e', () => {
	it('Register - success', async () => {
		const res = await request(application.app)
			.post('/users/register')
			.send({ email: 'aa1@aaa.ru', password: '122', name: 'Anatoliy' });
		expect(res.statusCode).toBe(200);
	});

	it('Register - error', async () => {
		const res = await request(application.app)
			.post('/users/register')
			.send({ email: 'a@a.ru', password: '1' });
		expect(res.statusCode).toBe(422);
	});

	it('Login - sucess', async () => {
		const res = await request(application.app)
			.post('/users/login')
			.send({ email: 'xyz1@mail.ru', password: 'xyz' });
		expect(res.body.jwt).not.toBeUndefined();
	});

	it('Login - error', async () => {
		const res = await request(application.app)
			.post('/users/login')
			.send({ email: 'xyz1@mail.ru', password: '!xyz' });
		expect(res.statusCode).toBe(401);
	});

	it('Info - sucess', async () => {
		const login = await request(application.app)
			.post('/users/login')
			.send({ email: 'xyz1@mail.ru', password: 'xyz' });
		const res = await request(application.app)
			.get('/users/info')
			.set('Authorization', `Bearer ${login.body.jwt}`);
		expect(res.body.email).toBe('xyz1@mail.ru');
	});

	it('Info - error', async () => {
		const login = await request(application.app)
			.post('/users/login')
			.send({ email: 'xyz1@mail.ru', password: 'xyz' });
		const res = await request(application.app).get('/users/info').set('Authorization', `Bearer 1`);
		expect(res.statusCode).toBe(401);
	});
});

afterAll(() => {
	application.close();
});
