import { NextFunction, Request, Response } from 'express'
import { BaseController } from '../common/base.controller'
import { LoggerService } from '../logger/logger.service'

export class UsersController extends BaseController {
    constructor(logger: LoggerService) {
        super(logger)
        this.bindRoutes([
            { path: '/register', func: this.register, method: 'post' },
            { path: '/login', func: this.login, method: 'post' },
        ])
    }
    login(req: Request, res: Response, next: NextFunction) {
        this.ok(res, 'Login')
    }
    register(req: Request, res: Response, next: NextFunction) {
        this.ok(res, 'Register')
    }
}
