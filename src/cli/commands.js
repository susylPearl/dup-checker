import { findDuplicates } from "../core/detector.js";
import { logInfo, logWarning } from "../utils/logger.js";

const run = () => {
  const directory = process.argv[2] || ".";
  debugger;
  logInfo(`Scanning directory: ${directory}`);

  const duplicates = findDuplicates(directory);
  if (duplicates.length > 0) {
    logWarning("Duplicates found:");
    duplicates.forEach((d) => {
      console.log(`${d.name} in ${d.file}`);
    });
  } else {
    logInfo("No duplicates found.");
  }
};

export { run };
