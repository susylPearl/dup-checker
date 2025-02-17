//const chalk = require('chalk');
import chalk from "chalk";

const logInfo = (msg) => console.log(chalk.blue(msg));
const logWarning = (msg) => console.log(chalk.yellow(msg));
const logError = (msg) => console.log(chalk.red(msg));

export { logError, logInfo, logWarning };
