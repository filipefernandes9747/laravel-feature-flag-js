const FeatureFlag = require("./src/featureFlag");
const { useFeatureFlag: useFeatureFlagReact } = require("./src/react");
const { useFeatureFlag: useFeatureFlagVue } = require("./src/vue");
const FeatureFlagService = require("./src/angular").FeatureFlagService;
const { useFeatureFlag: useFeatureFlagSvelte } = require("./src/svelte");

module.exports = {
  FeatureFlag,
  useFeatureFlagReact,
  useFeatureFlagVue,
  FeatureFlagService,
  useFeatureFlagSvelte,
};
