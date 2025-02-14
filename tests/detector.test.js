// const { findDuplicates } = require("../src/core/detector");
import { findDuplicates } from "../src/core/detector.js";

describe("Duplicate Detector", () => {
  test("should find duplicates", () => {
    const duplicates = findDuplicates("test-data");
    expect(duplicates.length).toBeGreaterThan(0);
  });
});
