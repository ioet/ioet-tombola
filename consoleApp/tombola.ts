import { Command } from "commander";
import { commands } from "./cli";

const program = new Command();

program
    .name('tombola')
    .description('a simple CLI app to test the tombola logic')
    .version('0.0.1');

program.command('create')
    .description('create a tombola rotation')
    .argument('<name>', 'name of the rotation')
    .requiredOption('-f, --frequency <days>', 'frequency of the rotation in days')
    .requiredOption('-p, --people <list of people>', 'comma separated list of people that will be part of the rotation')
    .action(commands.create);


program.command('remove')
    .description('delete a tombola rotation')
    .argument('<id>', 'name of the rotation')
    .action(commands.remove);

program.parse();
