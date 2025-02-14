import { readFiles } from "../utils/fileReader.js";
import { parseFile } from "./parser.js";
import { extractIdentifiers } from "./traverser.js";

const findDuplicates = (directory) => {
  const files = readFiles(directory);
  const duplicates = [];

  files.forEach((file) => {
    debugger;
    const ast = parseFile(file);
    const identifiers = extractIdentifiers(ast);

    const nameCount = {};
    identifiers.forEach((name) => {
      nameCount[name] = (nameCount[name] || 0) + 1;
    });

    Object.entries(nameCount).forEach(([name, count]) => {
      if (count > 1) {
        duplicates.push({ name, file });
      }
    });
  });

  return duplicates;
};

export { findDuplicates };
