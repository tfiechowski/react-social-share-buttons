module.exports = {
  setupFiles: ["./jest.boot.js"],
  testRegex: ".test.js",
  testPathIgnorePatterns: ["__snapshots__"],
  snapshotSerializers: ["enzyme-to-json/serializer"]
};
