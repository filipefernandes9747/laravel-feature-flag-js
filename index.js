const FeatureFlag = require("./src/featureFlag");
const { useFeatureFlag: useFeatureFlagReact } = require("./src/react");
const { useFeatureFlag: useFeatureFlagVue } = require("./src/vue");
const { useFeatureFlag: useFeatureFlagVue2 } = require("./src/vue2");
const FeatureFlagService = require("./src/angular").FeatureFlagService;
const { useFeatureFlag: useFeatureFlagSvelte } = require("./src/svelte");

module.exports = {
  FeatureFlag,
  useFeatureFlagReact,
  useFeatureFlagVue,
  useFeatureFlagVue2,
  FeatureFlagService,
  useFeatureFlagSvelte,
};
