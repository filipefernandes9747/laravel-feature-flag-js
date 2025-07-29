const FeatureFlag = require("../src/featureFlag");

const flags = new FeatureFlag({ feature1: true, feature2: false });

console.assert(
  flags.isEnabled("feature1") === true,
  "feature1 should be enabled"
);
console.assert(
  flags.isEnabled("feature2") === false,
  "feature2 should be disabled"
);

flags.enable("feature2");
console.assert(
  flags.isEnabled("feature2") === true,
  "feature2 should be enabled now"
);

flags.toggle("feature1");
console.assert(
  flags.isEnabled("feature1") === false,
  "feature1 should be toggled off"
);

console.log("All tests passed");
