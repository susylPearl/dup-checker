// const fs = require("fs");
// const path = require("path");
// const { SUPPORTED_EXTENSIONS, IGNORE_DIRS } = require("../config/settings");
import fs from 'fs';
import path from 'path';
import { SUPPORTED_EXTENSIONS, IGNORE_DIRS } from '../config/settings.js';

const readFiles = (dir) => {
  let files = [];
  fs.readdirSync(dir).forEach((file) => {
    const fullPath = path.join(dir, file);
    if (IGNORE_DIRS.includes(file)) return;
    if (fs.statSync(fullPath).isDirectory()) {
      files = files.concat(readFiles(fullPath));
    } else if (SUPPORTED_EXTENSIONS.some((ext) => file.endsWith(ext))) {
      files.push(fullPath);
    }
  });
  return files;
};

export { readFiles };
