import { NextFunction, Request, Response } from 'express';
import { BaseController } from '../common/base.controller';
import { HTTPError } from '../errors/http-error.class';
import { inject, injectable } from 'inversify';
import { TYPES } from '../types';
import { ILogger } from '../logger/logger.interface';
import 'reflect-metadata';
import { IUsersController } from './users.controller.interface';

class User {}
const users = [];

@injectable()
export class UsersController extends BaseController implements IUsersController {
	constructor(@inject(TYPES.ILogger) private loggerService: ILogger) {
		super(loggerService);
		this.bindRoutes([
			{ path: '/register', func: this.register, method: 'post' },
			{ path: '/login', func: this.login, method: 'post' },
		]);
	}
	login(req: Request, res: Response, next: NextFunction): void {
		users.push(new User());
		next(new HTTPError(401, 'ошибка авторизации', 'login'));
	}
	register(req: Request, res: Response, next: NextFunction): void {
		this.ok(res, 'Register');
	}
}
