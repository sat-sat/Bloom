import yargs from 'yargs';
import requireDir from 'require-dir';

process.env.NODE_ENV = process.env.NODE_ENV || yargs.argv.env || 'development';
requireDir('./gulp');