import ApplicationConfiguration from './core/app/config';
import init from './core/app/init';
import core from './core/core.client.module';
import example from './example/example.client.module';
import users from './users/users.client.module';
import articles from './articles/articles.client.module';

init(ApplicationConfiguration);
core(ApplicationConfiguration);
example(ApplicationConfiguration);
users(ApplicationConfiguration);
articles(ApplicationConfiguration);