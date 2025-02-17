import { findDuplicates } from "../core/detector.js";
import { logError, logSuccess } from "../utils/logger.js";

const run = () => {
  // Get the input path from CLI argument
  const inputPath = process.argv[2];
  if (!inputPath) {
    logError("Please provide a path to scan.");
    process.exit(1);
  }

  // Get the duplicate variables/functions on scanned path
  const duplicates = findDuplicates(inputPath);
  if (duplicates.length > 0) {
    logError(`Duplicates variables/functions found in ${inputPath}`);
    duplicates.forEach((d) => {
      logError(`- ${d.name} in ${d.file}`);
    });
  } else {
    logSuccess(`No duplicates variables/functions found in ${inputPath}`);
  }
};

export { run };
