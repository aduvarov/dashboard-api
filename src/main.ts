import { Container, ContainerModule } from 'inversify';
import { App } from './app';
import { ExeptionFilter } from './errors/exeption.filter';
import { LoggerService } from './logger/logger.service';
import { UsersController } from './users/users.controller';
import { ILogger } from './logger/logger.interface';
import { TYPES } from './types';
import { IExeptionFilter } from './errors/exeption.filter.interface';
import { UserService } from './users/user.service';
import { IUserService } from './users/user.service.interface';
import { IUsersController } from './users/users.controller.interface';

export interface IBootstrapReturn {
	appContainer: Container;
	app: App;
}

export const appBindings = new ContainerModule((bind) => {
	bind.bind<ILogger>(TYPES.ILogger).to(LoggerService);
	bind.bind<IExeptionFilter>(TYPES.ExeptionFilter).to(ExeptionFilter);
	bind.bind<IUsersController>(TYPES.UsersController).to(UsersController);
	bind.bind<IUserService>(TYPES.UserService).to(UserService);
	bind.bind<App>(TYPES.Application).to(App);
});

function bootstrap(): IBootstrapReturn {
	const appContainer = new Container();
	appContainer.load(appBindings);
	const app = appContainer.get<App>(TYPES.Application);
	app.init();
	return { appContainer, app };
}

export const { app, appContainer } = bootstrap();
