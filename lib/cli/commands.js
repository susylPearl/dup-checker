"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.run = void 0;
var _detector = require("../core/detector.js");
var _logger = require("../utils/logger.js");
var run = exports.run = function run() {
  var directory = process.argv[2] || ".";
  debugger;
  (0, _logger.logInfo)("Scanning directory: ".concat(directory));
  var duplicates = (0, _detector.findDuplicates)(directory);
  if (duplicates.length > 0) {
    (0, _logger.logWarning)("Duplicates found:");
    duplicates.forEach(function (d) {
      console.log("- ".concat(d.name, " in ").concat(d.file));
    });
  } else {
    (0, _logger.logInfo)("No duplicates found.");
  }
};