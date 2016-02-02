import ApplicationConfiguration from './core/app/config';
import init from './core/app/init';
import core from './core/core.client.module';
import login from './login/login.client.module';
import users from './users/users.client.module';
import articles from './articles/articles.client.module';

init(ApplicationConfiguration);
core(ApplicationConfiguration);
login(ApplicationConfiguration);
users(ApplicationConfiguration);
articles(ApplicationConfiguration);