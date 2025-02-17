import chalk from "chalk";

const logSuccess = (msg) => console.log(chalk.green(msg));
const logInfo = (msg) => console.log(chalk.blue(msg));
const logWarning = (msg) => console.log(chalk.yellow(msg));
const logError = (msg) => console.log(chalk.red(msg));

export { logError, logInfo, logSuccess, logWarning };
