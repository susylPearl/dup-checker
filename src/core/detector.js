import { scanPath } from "../utils/fileReader.js";
import { parseFile } from "./parser.js";
import { extractIdentifiers } from "./traverser.js";

import { logInfo, logWarning } from "../utils/logger.js";

const findDuplicates = (inputPath) => {
  // Start scanning and get the list of files
  const files = scanPath(inputPath);
  const duplicates = [];

  // Display the list of files
  logWarning("Files to be scanned:");
  files.forEach((file) => {
    logWarning(`- ${file}`);
  });

  files.forEach((file) => {
    logInfo(`Scanning file: ${file}`);

    const ast = parseFile(file);
    const identifiers = extractIdentifiers(ast);
    console.log(identifiers);
    const countMap = {};

    // Count occurrences while tracking type and name
    identifiers.forEach((id) => {
      const type = Object.keys(id)[0];
      const name = Object.values(id)[0];
      const key = `${type}:${name}`;

      countMap[key] = (countMap[key] || 0) + 1;
    });

    // Collect duplicates
    Object.entries(countMap).forEach(([key, count]) => {
      if (count > 1) {
        const [type, name] = key.split(":");
        duplicates.push({ name: `${type}: ${name}`, file });
      }
    });
  });

  return duplicates;
};

export { findDuplicates };
