import fs from "fs";
import path from "path";
import { IGNORE_DIRS, SUPPORTED_EXTENSIONS } from "../config/settings.js";

const scanPath = (inputPath) => {
  const absolutePath = path.resolve(inputPath);
  let files = [];

  // Check if the path is a file
  if (fs.statSync(absolutePath).isFile()) {
    if (isSupportedFile(absolutePath)) {
      files.push(absolutePath);
    } else {
      console.log(chalk.yellow(`Skipping unsupported file: ${absolutePath}`));
    }
    return files;
  }

  // If it's a directory, scan recursively
  fs.readdirSync(absolutePath).forEach((file) => {
    const fullPath = path.join(absolutePath, file);

    if (fs.statSync(fullPath).isDirectory()) {
      if (!IGNORE_DIRS.includes(file)) {
        files = files.concat(scanPath(fullPath)); // Recursive call for directories
      }
    } else if (isSupportedFile(fullPath)) {
      files.push(fullPath);
    }
  });

  return files;
};

const isSupportedFile = (file) => {
  return SUPPORTED_EXTENSIONS.includes(path.extname(file));
};

export { scanPath };
