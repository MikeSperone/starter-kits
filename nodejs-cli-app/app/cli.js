import argparse from 'argparse';
import consola from 'consola';
import { name, description, version } from '../package.json';


consola.log('-'.repeat(40));
consola.log(name);
consola.log(description);
consola.log(`Version ${version}`);
consola.log('-'.repeat(40), '\n\n');
