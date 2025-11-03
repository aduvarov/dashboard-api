import { NextFunction, Request, Response } from 'express'
import { BaseController } from '../common/base.controller'
import { LoggerService } from '../logger/logger.service'
import { HTTPError } from '../errors/http-error.class'

export class UsersController extends BaseController {
    constructor(logger: LoggerService) {
        super(logger)
        this.bindRoutes([
            { path: '/register', func: this.register, method: 'post' },
            { path: '/login', func: this.login, method: 'post' },
        ])
    }
    login(req: Request, res: Response, next: NextFunction) {
        next(new HTTPError(401, 'ошибка авторизации', 'login'))
    }
    register(req: Request, res: Response, next: NextFunction) {
        this.ok(res, 'Register')
    }
}
